import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    function removeItem(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      delete guestCart[productId]
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }
    let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    const {products} = this.props
    let cartProducts = products.filter(product => product.id in cart)

    let result = 0
    cartProducts.forEach(product => {
      result += Math.round(product.price * cart[product.id]) / 100
    })

    let fullAmount = result

    return (
      <div>
        <h1>MY CART</h1>
        {cartProducts.map(product => (
          <div key={JSON.stringify([product.id, cart[product.id]])}>
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
        <button type="button">Check Out</button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapState, mapDispatch)(Cart)
