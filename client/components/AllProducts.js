import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import session from 'express-session'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    const {products} = this.props
    const addToCart = (product, quantityToAdd) => {
      //keys = productid, value = quantity
      let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
      let oldQuantity = cart[product.id] || 0
      let newQuantity = oldQuantity + quantityToAdd
      cart[product.id] = newQuantity
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }
    // const onClick = event => {
    //   sessionStorage.setItem('orderProduct', event.target.value )
    // }

    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.imageUrl} height="200" width="200" />
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button type="button" onClick={() => addToCart(product, 1)}>
              Add to Cart
            </button>
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
