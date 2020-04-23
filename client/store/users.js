import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'

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

/**
 * THUNK CREATORS
 */
export const fetchAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')
    dispatch(getAllUsers(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.allUsers
    default:
      return state
  }
}
