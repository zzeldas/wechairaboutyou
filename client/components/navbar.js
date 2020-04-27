import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/singleUser'

const Navbar = ({handleClick, isLoggedInUser}) => {
  return (
    <div id="nav">
      <img src="/title.png" height="50" width="400" />
      <img src="/chair_logo.png" height="50" width="50" id="chairLogo" />

      {isLoggedInUser ? (
        <div className="dropMenuBody">
          <ul>
            {/* The navbar will show these links after you log in */}
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="topnav">
          <ul>
            {/* The navbar will show these links before you log in */}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      )}

      <hr />
    </div>
  )
}

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
