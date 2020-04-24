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
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/addproduct" component={newProduct} />
        <Route
          exact
          path="/updateProduct/:id/:name/:description/:price/:quantity/:isActive"
          component={updateProduct}
        />
        {isLoggedInUser && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            {/* <Route exact path="/addproduct" component={AddProductForm} /> */}
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
