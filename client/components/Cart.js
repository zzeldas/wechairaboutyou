import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Product from '../../server/db/'
// import {fetchCart} from '../store/products'

export class Cart extends React.Component {
  componentDidMount() {}

  render() {
    let items = JSON.parse(sessionStorage.getItem('cart'))

    let array = []

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
        <p>{item}</p>
        <button type="button">Check Out</button>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(Cart)
