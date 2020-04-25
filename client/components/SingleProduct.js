import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProductFromStore(this.props.match.params.productId)
  }

  render() {
    const {product, user} = this.props
    console.log('this.props: ', this.props)
    console.log(this.props.user)

    return (
      <div>
        <h2 id="title">{product.name}</h2>
        <img src={product.imageUrl} height="300" width="300" />
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Available Count: {product.quantity}</p>
        <button type="button">Add to Cart</button>
        {user.isAdmin === true && (
          <div>
            <Link
              to={`/updateProduct/${product.id}/${product.name}/${
                product.description
              }/${product.price}/${product.quantity}/${product.isActive}`}
            >
              <button type="button">Edit Product</button>
            </Link>

            {/* PENDING TO SIMPLIFY THE ROUTE BY MARIA */}
            {/* <Link
                to={'/updateProduct'}
              >
                <button type="button">Edit Product</button>
              </Link> */}

            <Link
              to={`/removeProduct/${product.id}/${product.name}/${
                product.description
              }`}
            >
              <button type="button">Remove Product</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.product,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProductFromStore: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
