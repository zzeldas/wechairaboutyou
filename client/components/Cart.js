import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchCart} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.getCart()
  }

  render() {
    // let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    // const {products} = this.props
    // let cartProducts = products.filter(product => product.id in cart)
    // console.log('QQQ', cartProducts)

    // let result = 0
    // cartProducts.forEach(product => {
    //   result += product.price / 100 * cart[product.id]
    // })

    // let fullAmount = result

    // console.log('QQQ', result)
    //product name
    //product price
    //quantity
    //total

    // async function showCart (items) {
    //   let result = []
    //   // eslint-disable-next-line guard-for-in
    //   for (let productId in items) {
    //     // let quantityOrder = items[productId];
    //     let product = await Product.findByPK(productId)
    //     result.push(product)
    //   }
    //   return result
    // }
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
            <p>Price: {product.price / 100}</p>
            <p>Quantity: {cart[product.id]}</p>
            <p>Unit Total: {product.price / 100 * cart[product.id]}</p>
          </div>
        ))}
        <p>FULL AMOUNT: {fullAmount}</p>
        <button type="button">Check Out</button> */}
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
    getCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
