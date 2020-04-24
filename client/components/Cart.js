import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    let items = JSON.parse(sessionStorage.getItem('cart'))
    // console.log('ITEMS KEYS', Object.keys(items))

    // async function showCart (items) {
    //   let result = []
    //   // eslint-disable-next-line guard-for-in
    //   for (let productId in items) {
    //     // let quantityOrder = items[productId];
    //     let product = await Product.findByPK(productId)
    //     result.push(product)
    //   }
    //   return result
    // }

    return (
      <div>
        <h1>MY CART</h1>
        <button type="button">Check Out</button>
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

export default connect(mapState, mapDispatch)(Cart)
