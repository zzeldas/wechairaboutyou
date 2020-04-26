import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/users'

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsersFromStore()
  }

  render() {
    console.log('users comp')
    return (
      <div>
        {!this.props.users ? (
          <h2>No Registered Users</h2>
        ) : (
          this.props.users.map(user => (
            <ul key={user.id}>
              <li>ID :{user.id}</li>
              <li>First Name :{user.firstName}</li>
              <li>Last Name :{user.lastName}</li>
              <li>Email :{user.email}</li>
              <li>Address :{user.address}</li>
              <li>Is user admin :{user.isAdmin.toString()}</li>
            </ul>
          ))
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedInUser: !!state.user.id,
    users: state.users
  }
}

//dispatch fetchAllUsers
const mapDispatch = dispatch => {
  return {
    getUsersFromStore: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
