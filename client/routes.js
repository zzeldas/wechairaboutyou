import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store/singleUser'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import AllUsers from './components/AllUsers'

import newProduct from './components/newProduct'
import updateProduct from './components/updateProduct'
import removeProduct from './components/removeProduct'

import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import CheckoutPage from './components/CheckoutPage'
import ConfirmationPage from './components/ConfirmationPage'

import SingleCategory from './components/SingleCategory'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedInUser} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/addproduct" component={newProduct} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route
          exact
          path="/products/categories/:categoryId"
          component={SingleCategory}
        />
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkoutpage" component={CheckoutPage} />
        <Route exact path="/confirmationpage" component={ConfirmationPage} />

        <Route
          exact
          path="/updateProduct/:id/:name/:description/:price/:quantity/:isActive"
          component={updateProduct}
        />

        <Route
          exact
          path="/removeProduct/:id/:name/:description"
          component={removeProduct}
        />
        {/* Pending TO SIMPLIFY THE ROUTE by maria */}
        {/* <Route
          exact
          path="/updateProduct"
          component={updateProduct}
        /> */}
        {/* Pending to fix by maria */}

        {isLoggedInUser && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/addproduct" component={newProduct} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedInUser: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedInUser: PropTypes.bool.isRequired
}
