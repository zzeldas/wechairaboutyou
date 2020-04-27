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
    // const {cart} = this.props.location.state
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

    let ConfirmPage

    ConfirmPage = (
      <div className="wrapper">
        <div className="container">
          <h2>
            Thank you for your order!
            <img
              className="shipping"
              src="/checkmark.ico"
              alt="missing truck"
            />
          </h2>
          <h3>
            Now you can relax. We're working on getting your CHAIRS to you ASAP!
          </h3>
          <p> </p>

          <h2>
            <Link to="/home">
              <img className="cart" src="/home.ico" alt="missing cart image" />
              Continue Shopping
            </Link>
          </h2>
        </div>
      </div>
    )

    //       ConfirmPage = (
    //         //<div> Confirmation console logs </div>
    //         <div className="wrapper">
    //           <div className="container">
    //             <form onSubmit={this.handleSubmit}>
    //               <h2>
    //                 Shipping Details
    //                 <img
    //                   className="shipping"
    //                   src="/whitetruck.ico"
    //                   alt="missing truck"
    //                 />
    //                 <Link to="/cart">
    //                   <img
    //                     className="cart"
    //                     src="/cart.ico"
    //                     alt="missing cart image"
    //                   />
    //                   Cart
    //                 </Link>
    //               </h2>
    //               <div className="name">
    //                 <div>
    //                   <label htmlFor="firstName">First Name</label>
    //                   <input
    //                     placeholder="First Name"
    //                     onChange={this.handleChange}
    //                     type="text"
    //                     name="firstName"
    //                     value={user.firstName}
    //                     required
    //                   />
    //                 </div>

    //                 <div>
    //                   <label htmlFor="lastName">Last Name</label>
    //                   <input
    //                     placeholder="Last Name"
    //                     onChange={this.handleChange}
    //                     type="text"
    //                     name="lastName"
    //                     value={user.lastName}
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="leftinput">
    //                 <label htmlFor="name">Address</label>
    //                 <input
    //                   placeholder="address"
    //                   onChange={this.handleChange}
    //                   type="text"
    //                   name="address"
    //                   value={user.address}
    //                   required
    //                 />
    //               </div>
    //               <div className="leftinput">
    //                 <label htmlFor="name">Email</label>
    //                 <input
    //                   placeholder="email"
    //                   onChange={this.handleChange}
    //                   type="text"
    //                   name="email"
    //                   value={user.email}
    //                   required
    //                 />
    //               </div>
    //               <h2>
    //                 Payment Information
    //                 <img
    //                   className="shipping"
    //                   src="/creditcard.ico"
    //                   alt="missing cc image"
    //                 />
    //               </h2>
    //               <div className="leftinput">
    //                 <label htmlFor="card-num">Credit Card No.</label>
    //                 <input
    //                   placeholder="Credit Card"
    //                   onChange={this.handleChange}
    //                   type="text"
    //                   name="creditCard"
    //                   // value={user.creditCard}
    //                   required
    //                 />
    //               </div>
    //               <div className="cc-info">
    //                 <div>
    //                   <label htmlFor="expirationDate">Exp</label>
    //                   <input
    //                     placeholder="Expiration Date"
    //                     onChange={this.handleChange}
    //                     type="text"
    //                     name="expirationDate"
    //                     // value={user.cardExpDate}
    //                     required
    //                   />
    //                 </div>

    //                 <div>
    //                   <label htmlFor="ccv">CCV</label>
    //                   <input
    //                     placeholder="CCV"
    //                     onChange={this.handleChange}
    //                     type="text"
    //                     name="CCV"
    //                     // value={user.cardCcv}
    //                     required
    //                   />
    //                 </div>
    //                 <div>
    //                   <label htmlFor="zipCode">Zip Code </label>
    //                   <input
    //                     placeholder="zipCode"
    //                     onChange={this.handleChange}
    //                     type="text"
    //                     name="zipCode"
    //                     // value={user.zipCode}
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="btns">
    //                 <button disabled={!this.state.formcomplete} type="submit">
    //                   Confirm Your Order
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    // 	  )

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
  return {
    changeOrderStatus: orderId => dispatch(fetchChangeOrderStatus(orderId))
  }
}

export default connect(mapState, mapDispatch)(ConfirmationPage)
