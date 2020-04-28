import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {me} from '../store/singleUser'
import {
  fetchSingleCompletedOrder,
  fetchCreatePendingdOrder
} from '../store/confirmationpage'
import {fetchAllProducts} from '../store/products'
import {fetchCart} from '../store/cart'

export class ConfirmationPage extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'confirm'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    let orderId = this.props.location.state.orderId
    this.props.getSingleOrder(orderId)
    this.props.getProductsFromStore()
    this.props.getCart()
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      status: ''
    })
  }

  render() {
    const info = this.props.location.state
    const {user} = this.props
    const orderproducts = this.props.all.cart.orderproducts
    const products = this.props.products
    const productName = id => {
      let result = products.find(p => p.id === id)
      if (result) {
        return result.name
      } else {
        return 'Your Product'
      }
    }

    console.log('props', this.props)
    console.log('info', info)

    let ConfirmPage
    let userOrders

    if (orderproducts) {
      let orderProductsId = orderproducts.map(
        orderProduct => orderProduct.productId
      )

      userOrders = orderProductsId
        .map(id => {
          return this.props.products.filter(product => id === product.id)
        })
        .flat()

      console.log('USER ORDER', userOrders)
      let result = 0

      orderproducts.forEach(item => (result += item.unitPrice * item.quantity))

      ConfirmPage = (
        <div className="wrapper">
          <div className="container">
            <img
              className="confirmation"
              src="/checkmark.ico"
              alt="missing truck"
            />
            <h2>Thank you for your order!</h2>
            <h3>
              Now you can relax. We're working on getting your CHAIRS to you
              ASAP!
            </h3>
            <p> </p>
            <h3>Detail of your order:</h3>
            <div>
              {orderproducts.map((product, i) => (
                <div key={product.id}>
                  <Link to={`/products/${product.productId}`}>
                    {productName(product.productId)}
                  </Link>
                  <p>Price: ${Math.round(product.unitPrice / 100)}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Unit Total: ${Math.round(product.total / 100)}</p>
                </div>
              ))}
              <p>Total: ${Math.round(result / 100)}</p>
            </div>

            <Link to="/home">
              <img
                className="shipping"
                src="/home.ico"
                alt="missing cart image"
              />
              <button
                type="submit"
                onSubmit={() => this.props.createPendingOrder(user.id)}
              >
                Continue Shopping
              </button>
            </Link>
            {/* <Link to="/confirmationpage"> </Link> */}
          </div>
        </div>
      )
    }

    return <div>{ConfirmPage}</div>
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    order: state.singleOrder,
    all: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleOrder: orderId => dispatch(fetchSingleCompletedOrder(orderId)),
    getProductsFromStore: () => dispatch(fetchAllProducts()),
    createPendingOrder: () => dispatch(fetchCreatePendingdOrder()),
    getCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(ConfirmationPage)
