import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {fetchCart} from '../store/products'

export class Cart extends React.Component {
  componentDidMount() {}

  render() {
    let items = JSON.parse(sessionStorage.getItem('cart'))

    let item = sessionStorage.getItem('cart')

    // async function showCart () {
    //   let result = []
    //   for (let productId in items) {
    //     let quantity = items[productId];
    //     let product = await Product.findByPK(productId)
    //   }
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
