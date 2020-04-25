import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const GET_PENDING_ORDER = 'GET_PENDING_ORDER'
const ADD_ORDER = 'ADD_ORDER'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const getAllUsers = allUsers => ({
  type: GET_ALL_USERS,
  allUsers
})

const addUser = newUser => ({
  type: ADD_USER,
  newUser
})
/**
 * THUNK CREATORS
 */
export const fetchAllOrders = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')

    dispatch(getAllUsers(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchPendingOrder = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')

    dispatch(getAllUsers(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return action.allUsers
    case ADD_USER:
      return [...state, action.newUser]
    default:
      return state
  }
}
