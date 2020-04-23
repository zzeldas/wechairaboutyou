import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllUsers} from '../store/users'
import {makeStyles} from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'

const mapState = state => {
  return {
    isLoggedInUser: !!state.user.id
  }
}

//dispatch fetchAllUsers
const mapDispatch = dispatch => {
  return {
    getUsersFromStore: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
