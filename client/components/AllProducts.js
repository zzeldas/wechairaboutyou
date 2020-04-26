import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchCreateProduct} from '../store/cart'
import {number} from 'prop-types'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.createItem()
  }

  render() {
    const {products, user} = this.props
    let userCart
    if (!user.id) {
      userCart = (
        <div>
          {products.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} height="200" width="200" />
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button type="button" onClick={() => addToCart(product, 1)}>
                {' '}
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )
    } else {
      userCart = (
        <div>
          {user.isAdmin === true && (
            <Link to="/addproduct">
              <button type="button">Add Product</button>
            </Link>
          )}
          {products.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} height="200" width="200" />
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button
                type="button"
                onClick={() => this.props.createItem(product)}
              >
                ADD TO USER CART
              </button>
              <div id="flex-container" />
            </div>
          ))}
        </div>
      )
    }
    //GUEST CART ADDCART
    const addToCart = (product, quantityToAdd) => {
      let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
      let oldQuantity = cart[product.id] || 0
      let newQuantity = oldQuantity + quantityToAdd
      cart[product.id] = newQuantity
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }

    //USER CART ADDCART

    return <div>{userCart}</div>
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
    getProductsFromStore: () => dispatch(fetchAllProducts()),
    createItem: product => dispatch(fetchCreateProduct(product))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
