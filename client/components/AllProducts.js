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

    let productsView
    if (!user.id) {
      productsView = (
        <div>
          {products.map(product => (

            <div key={product.id} className="products">
              <img
                src={product.imageUrl}
                height="200"
                width="200"
                className="products-img"
              />
              <div className="products-info">
                <Link to={`/products/${product.id}`} className="product-name">
                  {product.name}
                </Link>
                <p className="price">Price: ${product.price}</p>
                <p className="quantity">Quantity: {product.quantity}</p>
                <button
                  type="button"
                  onClick={() => addToCart(product, 1)}
                  className="add-to-cart"
                >
                  {' '}
                  Add To Cart
                </button>
              </div>

            </div>
          ))}
        </div>
      )
    } else {
      productsView = (
        <div className="container">
          {user.isAdmin === true && (
            <Link to="/addproduct">
              <button type="button" className="add-new-product">
                Add Product
              </button>
            </Link>
          )}

          <div>
            {products.map(product => (
              <div key={product.id}>
                <div className="products">
                  <div className="products-img">
                    <img src={product.imageUrl} height="200" width="200" />
                  </div>
                  <div className="products-info">
                    <Link
                      to={`/products/${product.id}`}
                      className="product-name"
                    >
                      {product.name}
                    </Link>

                    <p className="price">Price: ${product.price}</p>
                    <p className="quantity">
                      Available Quantity: {product.quantity}
                    </p>

                    <button
                      type="button"
                      onClick={() => this.props.createItem(product)}
                      className="add-to-cart"
                    >
                      ADD TO USER CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    //USER CART ADDCART

    return <div>{productsView}</div>
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
