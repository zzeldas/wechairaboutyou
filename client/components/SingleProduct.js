import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProduct} from '../store/singleProduct'
import {fetchCreateProduct} from '../store/cart'

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
        <h2 id="title" className="single-product-name">
          {product.name}
        </h2>
        <div className="single-product-img-info">
          <img
            src={product.imageUrl}
            height="300"
            width="300"
            className="single-img"
          />
          <div className="single-product-info">
            <p className="single-info">Price: ${product.price}</p>
            <p className="single-info">Description: {product.description}</p>
            <p className="single-info">Available Count: {product.quantity}</p>
            <button
              type="button"
              className="add-to-cart"
              onClick={() => this.props.createItem(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {user.isAdmin === true && (
          <div>
            <Link
              to={`/updateProduct/${product.id}/${product.name}/${
                product.description
              }/${product.price}/${product.quantity}/${product.isActive}`}
            >
              <button type="button" className="admin-product-btn">
                Edit Product
              </button>
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
              <button type="button" className="admin-product-btn">
                Remove Product
              </button>
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
    getSingleProductFromStore: id => dispatch(fetchProduct(id)),
    createItem: product => dispatch(fetchCreateProduct(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
