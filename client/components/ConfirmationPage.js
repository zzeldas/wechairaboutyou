import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {me} from '../store/singleUser'
import {fetchSingleCompletedOrder} from '../store/confirmationpage'
import {fetchAllProducts} from '../store/products'

export class ConfirmationPage extends React.Component {
  constructor() {
    super()
    this.state = {
      // order: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getSingleCompletedOrder(this.props.location.state.orderId)
    this.props.getProductsFromStore()
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      // order: 'confirm'
    })
  }

  render() {
    const info = this.props.location.state
    const orderproducts = this.props.order.orderproducts
    const products = this.props.products
    const productName = id => {
      let result = products.find(p => p.id === id)
      if (result) {
        return result.name
      } else {
        return 'Your Product'
      }
    }

    console.log('PROPS', this.props)

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
                  <p>Price: ${product.unitPrice}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Unit Total: ${product.total}</p>
                </div>
              ))}
              <p>Total: ${result}</p>
            </div>

            <Link to="/home">
              <img
                className="shipping"
                src="/home.ico"
                alt="missing cart image"
              />
              <button
                type="button"
                onClick={() => this.props.createPendingOrder(info.userId)}
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
    order: state.singleOrder
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleCompletedOrder: orderId =>
      dispatch(fetchSingleCompletedOrder(orderId)),
    getProductsFromStore: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapState, mapDispatch)(ConfirmationPage)
