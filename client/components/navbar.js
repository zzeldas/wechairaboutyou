import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/singleUser'

const Navbar = ({handleClick, isLoggedInUser}) => (
  <div id="navbar">
    <img src="/title.png" height="50" width="400" id="title" />
    <img src="/chair_logo.png" height="80" width="80" />

    {/* <nav> */}
    {isLoggedInUser ? (
      <div>
        {/* The navbar will show these links after you log in */}
        {/* <nav className="navbar navbar-light bg-light"> */}
        {/* <ul className="nav justify-content-center">
              <li className="nav-item"> */}
        <Link to="/home" className="nav-link">
          Home
        </Link>
        {/* </li>
              <li className="nav-item"> */}
        <Link to="/products" className="nav-link">
          All Products
        </Link>
        {/* </li>
              <li className="nav-item"> */}
        <a href="#" onClick={handleClick} className="nav-link">
          Logout
        </a>
        {/* </li>
              <li className="nav-item"> */}
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        {/* </li>
            </ul>
          </nav> */}
      </div>
    ) : (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" /> */}
        {/* The navbar will show these links before you log in */}
        <Link to="/home">Home</Link>
        <Link to="/products">All Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart">Cart</Link>
      </div>
    )}
    {/* </nav> */}
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedInUser: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedInUser: PropTypes.bool.isRequired
}
