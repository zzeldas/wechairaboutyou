import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProductFromStore(this.props.match.params.productId)
  }

  render() {
    const {product} = this.props

    return (
      <div>
        <h2 id="title">{product.name}</h2>
        <img src={product.imgUrl} height="300" width="300" />
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Available Count: {product.quantity}</p>
        <button type="button">Add to Cart</button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProductFromStore: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)