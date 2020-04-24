import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    const {products} = this.props

    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.imageUrl} height="200" width="200" />
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button type="button">Add to Cart</button>
            <div id="flex-container">
              {/* <Link to={`/updateProduct/${product.id}/${product.name}/${product.description}/${product.price}/${product.quantity}/${product.isActive}/${encodeURI(product.imageUrl)}`}>Edit Product</Link> */}

              <Link
                to={`/updateProduct/${product.id}/${product.name}/${
                  product.description
                }/${product.price}/${product.quantity}/${product.isActive}`}
              >
                Edit Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
