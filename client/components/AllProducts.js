import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchCreateProduct} from '../store/cart'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    const {products, user} = this.props

    //GUEST CART ADDCART
    const addToCart = (product, quantityToAdd) => {
      let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
      let oldQuantity = cart[product.id] || 0
      let newQuantity = oldQuantity + quantityToAdd
      cart[product.id] = newQuantity
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }

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
        <div className="container">
          {user.isAdmin === true && (
            <Link to="/addproduct">
              <button type="button">Add Product</button>
            </Link>
          )}

          <div>
            {products.map(product => (
              <div key={product.id} className="card">
                <div>
                  <div className="card-img-top">
                    <img
                      src={product.imageUrl}
                      height="200"
                      width="200"
                      className="float-left"
                    />
                  </div>
                  <div className="card-body">
                    <Link to={`/products/${product.id}`} className="card-text">
                      {product.name}
                    </Link>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <button
                      type="button"
                      onClick={() => this.props.createItem(product)}
                      className="float-right"
                    >
                      ADD TO USER CART
                    </button>
                  </div>
                </div>

                <div id="flex-container" />
              </div>
            ))}
          </div>
        </div>
      )
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
