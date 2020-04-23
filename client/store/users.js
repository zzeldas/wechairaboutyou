import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USER = 'ADD_USER'

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
export const fetchAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')
    dispatch(getAllUsers(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSignUp = () => async dispatch => {
  try {
    const res = await axios.post('/api/users', {
      firstName,
      lastName,
      email,
      password,
      address
    })
    dispatch(addUser(res.data))
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
      return [...state, action.allUsers]
    case ADD_USER:
      return [...state, action.newUser]
    default:
      return state
  }
}
