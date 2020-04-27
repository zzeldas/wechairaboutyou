import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {me} from '../store/singleUser'
import {fetchSingleCompletedOrder} from '../store/confirmationpage'

export class ConfirmationPage extends React.Component {
  constructor() {
    super()
    this.state = {
      orderid: '',
      formcomplete: false,
      status: 'pending',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      creditCard: '',
      CCV: '',
      expirationDate: '',
      zipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getSingleCompletedOrder(this.props.location.state.orderId)
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
      formcomplete: false,
      status: 'completed'
    })
  }

  render() {
    const info = this.props.location.state
    // const orderproducts = this.props.order.orderproducts

    // let orderproducts;

    // if(this.props.order.orderproducts){
    //   orderproducts = this.props.order.orderproducts
    // }

    console.log('PROPS', this.props)
    // let orderProducts = this.props.cart.cart.orderproducts

    //   let userCartProducts

    //   if (orderProducts) {
    // 	  let orderProductsId = orderProducts.map(
    // 		  orderProduct => orderProduct.productId
    // 	  )

    // userCartProducts = orderProductsId
    // .map(id => {
    // 	return products.filter(product => id === product.id)
    // })
    // .flat()

    let ConfirmPage

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
            Now you can relax. We're working on getting your CHAIRS to you ASAP!
          </h3>
          <p> </p>
          <h3>Detail of your order:</h3>
          {/* <div>
						{orderproducts.map((product) => (
              <div key = {product.id}>
                <Link to={`/products/${product.productId}`}>Your Product</Link>
                <p>Price: ${product.unitPrice}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Unit Total: ${product.total}</p>
              </div>
              ))}
					</div> */}

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
              {' '}
              Continue Shopping{' '}
            </button>
          </Link>
          {/* <Link to="/confirmationpage"> </Link> */}
        </div>
      </div>
    )

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
      dispatch(fetchSingleCompletedOrder(orderId))
  }
}

export default connect(mapState, mapDispatch)(ConfirmationPage)
