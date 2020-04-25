import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchPendingOrder} from '../store/order'
import {fetchCart} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.getPendingOrderFromStore()
  }

  render() {
    const {products, user} = this.props
    console.log('CART PROPS', this.props)
    function removeItem(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      delete guestCart[productId]
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }
    let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    let cartProducts = products.filter(product => product.id in cart)

    let result = 0
    cartProducts.forEach(product => {
      result += Math.round(product.price * cart[product.id]) / 100
    })

    this.props.getCart()

    console.log('cart', this.props.cart)
    console.log('products', this.props.products)
    console.log('req.session', sessionStorage)

    return (
      <div>
        <h1>MY CART</h1>
        {!this.props.cart.orderproducts ? (
          <div>
            <h3>There are currently no chairs in your shopping cart!</h3>
            <Link to="/products">Look for chairs to add to your cart</Link>
          </div>
        ) : (
          <h3>There are something in cart</h3>
        )}
        {/* {cartProducts.map(product => (
          <div key={product.name}>

            <p>Name: {product.name}</p>
            <p>Price: ${product.price / 100}</p>
            <p>Quantity: {cart[product.id]}</p>
            <p>
              Unit Total: ${Math.round(product.price * cart[product.id]) / 100}
            </p>
            <button
              type="button"
              onClick={() => {
                removeItem(product.id)
                location.reload()
              }}
            >
              Remove Button
            </button>
          </div>
            ))}

        <p>FULL AMOUNT: ${fullAmount}</p>
        <button type="button">Check Out</button>*/}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts()),

    getPendingOrderFromStore: () => dispatch(fetchPendingOrder()),

    getCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
