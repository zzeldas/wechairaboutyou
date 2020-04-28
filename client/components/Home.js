import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../store/singleUser'

class Home extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    console.log('props', this.props)
    let user
    if (this.props.user) {
      user = this.props.user
    }
    return (
      <div>
        <main>
          <center>
            {user ? (
              <div>
                <h1 className="m-5">Welcome! {user.firstName}!</h1>
                <h3>Your Profile</h3>
                <p>{user.firstName + ' ' + user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.address}</p>
                <button type="button">edit profiles</button>
                <h3>Your Past Purchase</h3>
              </div>
            ) : (
              <div>
                <p />
                {/* <p>This seems like a nice place to get started with some Routes!</p> */}
                <Link to="/products">Check out the Chairs in Store</Link>
              </div>
            )}
          </center>
        </main>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  getUser: user => dispatch(me(user))
})

export default connect(mapState, mapDispatch)(Home)
