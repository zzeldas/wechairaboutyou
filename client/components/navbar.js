import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/singleUser'

const Navbar = ({handleClick, isLoggedInUser}) => {
  return (
    <div id="nav">
      {isLoggedInUser ? (
        <div className="dropMenuBody">
          <nav>
            <ul>
              {/* The navbar will show these links after you log in */}

              <img src="/title.png" height="30" width="300" id="title-logo" />
              <img
                src="/chair_logo.png"
                height="30"
                width="30"
                id="chairLogo"
              />

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
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="topnav">
          <nav>
            <ul>
              {/* The navbar will show these links before you log in */}
              <img src="/title.png" height="30" width="300" id="title-logo" />
              <img
                src="/chair_logo.png"
                height="30"
                width="30"
                id="chairLogo"
              />
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
          </nav>
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
