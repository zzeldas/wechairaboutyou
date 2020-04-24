import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    const {products, user} = this.props

    return (
      <div>
        {user.isAdmin === true && <button type="button">Add Product</button>}
        {products.map(product => (
          <div key={product.id}>
            <img src={product.imageUrl} height="200" width="200" />
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button type="button">Add to Cart</button>
          </div>
        ))}
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

export default connect(mapState, mapDispatch)(AllProducts)
