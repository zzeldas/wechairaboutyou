import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchPendingOrder} from '../store/order'

import {
  fetchCart,
  fetchRemovedItem,
  increaseQty,
  decreaseQty
} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.getCart()

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(itemId, e) {
    e.preventDefault()
    this.props.removeUserItem(itemId)
    this.props.getCart()
  }

  render() {
    const {products} = this.props
    console.log('PROPS', this.props)
    //GUEST CART
    function removeItem(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      delete guestCart[productId]
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }

    function increaseQtyGuest(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      guestCart[productId] += 1
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }

    function decreaseQtyGuest(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      guestCart[productId] -= 1
      console.log('GUESTCART INC: ', guestCart)
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }

    let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    let cartProducts = products.filter(product => product.id in cart)

    //USER CART

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
    }

    const cartTotal = () => {
      if (orderProducts) {
        //userCart total
        console.log('orderProducts for user order', orderProducts)
        if (orderProducts.length === 0) {
          return 0
        } else {
          //user have order products in cart
          let result = 0
          orderProducts.forEach(product => {
            result += product.unitPrice * product.quantity
          })
          return (result / 100).toFixed(2)
        }
      } else {
        //guest cart total

        let result = 0
        cartProducts.forEach(product => {
          result += product.price * cart[product.id]
        })
        return Math.round(result * 100) / 100
      }
    }

    return (
      <div>
        <h2 className="review-order">My Order</h2>
        {!this.props.user.id ? (
          <div className="cart-div">
            {cartProducts.map(product => (
              <div key={product.name} className="cart-container">
                <img
                  src={product.imageUrl}
                  height="200"
                  width="200"
                  className="cart-products-img"
                />
                <div className="cart-products-info">
                  <Link
                    to={`/products/${product.id}`}
                    className="cart-product-name"
                  >
                    {product.name}
                  </Link>
                  <p className="price">${product.price}</p>
                  <p className="quantity">Quantity: {cart[product.id]}</p>
                  <button
                    type="button"
                    onClick={() => {
                      increaseQtyGuest(product.id)
                      location.reload()
                    }}
                    className="update-qty"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      decreaseQtyGuest(product.id)
                      location.reload()
                    }}
                    className="update-qty"
                  >
                    -
                  </button>
                  <p className="price">
                    Unit Total: ${product.price * cart[product.id]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(product.id)
                      location.reload()
                    }}
                    className="delete-btn"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}{' '}
          </div>
        ) : (
          <div className="cart-div">
            {userCartProducts ? (
              userCartProducts.map((product, i) => (
                <div key={product.name} className="cart-container">
                  <img
                    src={product.imageUrl}
                    height="200"
                    width="200"
                    className="cart-products-img"
                  />
                  <div className="cart-products-info">
                    <Link
                      to={`/products/${product.id}`}
                      className="cart-product-name"
                    >
                      {product.name}
                    </Link>
                    <p className="price">Price: ${orderProducts[i].price}</p>
                    <p className="quantity">
                      Quantity: {orderProducts[i].quantity}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        this.props.increaseQty(product.id)
                      }}
                      className="update-qty"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        this.props.decreaseQty(product.id)
                      }}
                      className="update-qty"
                    >
                      -
                    </button>
                    <p className="price">
                      Unit Total: ${product.price * orderProducts[i].quantity}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        this.props.removeUserItem(product)
                        // this.handleDelete(product.id, e)
                      }}
                      className="delete-btn"
                    >
                      Remove Chair
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h3>Nothing in your cart</h3>
            )}
          </div>
        )}

        <p className="full-price">FULL AMOUNT: ${cartTotal()}</p>
        {cartTotal() ? (
          <Link
            to={{
              pathname: '/checkoutpage',
              state: this.props.cart
            }}
          >
            <button className="checkout" type="button">
              Check Out
            </button>
          </Link>
        ) : (
          <Link
            to={{
              pathname: '/products',
              state: this.props.cart
            }}
          >
            <h3>
              Cart is empty, click here to find your perfect chairs to add to
              your shopping cart
            </h3>
          </Link>
        )}
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
    getPendingOrderFromStore: () => dispatch(fetchPendingOrder()),
    getCart: () => dispatch(fetchCart()),
    removeUserItem: product => dispatch(fetchRemovedItem(product)),
    increaseQty: id => dispatch(increaseQty(id)),
    decreaseQty: id => dispatch(decreaseQty(id))
  }
}

export default connect(mapState, mapDispatch)(Cart)
