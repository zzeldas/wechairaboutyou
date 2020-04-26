import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchPendingOrder} from '../store/order'

import {fetchCart, fetchCreateProduct, fetchRemovedItem, increaseQty, decreaseQty} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.getCreateProduct()
    this.props.getCart()

    this.handleDelete = this.handleDelete.bind(this)
    this.handleClickIncrease = this.handleClickIncrease.bind(this)
  }
  handleDelete(itemId, e) {
    e.preventDefault()
    this.props.removeUserItem(itemId)
    this.props.getCart()
  }

  handleClickIncrease(id) {
    this.props.increaseQty(id)
  }

  render() {
    const {products, user} = this.props

    //GUEST CART
    function removeItem(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      delete guestCart[productId]
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }
    let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    let cartProducts = products.filter(product => product.id in cart)

    let result = 0
    cartProducts.forEach(product => {
      result += product.price * cart[product.id]
    })
    let fullAmount = result

    //USER CART
    console.log('this props ', this.props)
    let orderProducts = this.props.cart.cart.orderproducts

    let userCartProducts

    if (orderProducts) {
      let orderProductsId = orderProducts.map(
        orderProduct => orderProduct.productId
      )

      userCartProducts = orderProductsId
        .map(id => {
          return products.filter(product => id === product.id)
        })
        .flat()

      console.log('USERCARTPRODUCTS', userCartProducts)
      console.log('ORDERPRODUCTS', orderProducts)
    }

    return (
      <div>
        <h1>MY CART</h1>
        {/* <p>FULL AMOUNT: ${fullAmount}</p>
        <button type="button">Check Out</button> */}
        {!this.props.user.id ? (
          cartProducts.map(product => (
            <div key={product.name}>
              <img src={product.imageUrl} height="200" width="200" />
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p>Price: ${product.price}</p>
              <p>Quantity: {cart[product.id]}</p>
              <p>Unit Total: ${product.price * cart[product.id]}</p>
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
          ))
        ) : (
          <div>
            {userCartProducts ? (
              userCartProducts.map((product, i) => (
                <div key={product.name}>
                  <img src={product.imageUrl} height="200" width="200" />
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {orderProducts[i].quantity}</p>
                  <button
                    type="button"
                    onClick={this.handleClickIncrease(product.id)}
                  >
                    Increase
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.decreaseQty(product.id)
                    }}
                  >
                    Decrease
                  </button>
                  <p>
                    Unit Total: ${product.price * orderProducts[i].quantity}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.removeUserItem(product)
                      // this.handleDelete(product.id, e)
                    }}
                  >
                    Remove Button
                  </button>
                </div>
              ))
            ) : (
              <h3>Nothing in your cart</h3>
            )}
          </div>
        )}
        <p>FULL AMOUNT: ${fullAmount}</p>
        <Link to="/checkoutpage">
          <button type="button">Check Out</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart,
    orderproducts: state.orderproducts
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts()),
    getCreateProduct: () => dispatch(fetchCreateProduct()),

    getPendingOrderFromStore: () => dispatch(fetchPendingOrder()),

    getCart: () => dispatch(fetchCart()),
    removeUserItem: product => dispatch(fetchRemovedItem(product))
    increaseQty: id => dispatch(increaseQty(id)),
    decreaseQty: id => dispatch(decreaseQty(id))
  }
}

export default connect(mapState, mapDispatch)(Cart)

