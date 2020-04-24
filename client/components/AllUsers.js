import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/users'

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsersFromStore()
  }

  render() {
    return (
      <div>
        {this.props.users ? (
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
        ) : (
          <h2>No Users</h2>
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
