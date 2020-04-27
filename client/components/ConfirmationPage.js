import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {me} from '../store/singleUser'
import {fetchChangeOrderStatus} from '../store/checkout'

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
    //const { cart } = this.props.location.state
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
    const {cart, user} = this.props

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
					<p>Order Total: ${car.cart.total}</p>
						cart.orderproducts.map(product => (
					<div key={product.name}>
						<img src={product.imageUrl} height="100" width="100" />
						<Link to={`/products/${product.id}`}>{product.name}</Link>
						<p>Price: ${product.price}</p>
						<p>Quantity: {cart[product.id]}</p>
						<p>Unit Total: ${product.price * cart[product.id]}</p>)
					</div>
					</div> */}

          <h3>
            <Link to="/home">
              <img
                className="shipping"
                src="/home.ico"
                alt="missing cart image"
              />
              Continue Shopping
            </Link>
            {/* <Link to="/confirmationpage"> </Link> */}
          </h3>
        </div>
      </div>
    )

    return <div>{ConfirmPage}</div>
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  // return {
  // 	changeOrderStatus: orderId => dispatch(fetchChangeOrderStatus(orderId))
  // }
}

export default connect(mapState, mapDispatch)(ConfirmationPage)
