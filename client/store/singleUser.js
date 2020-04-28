import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateUser = user => ({type: UPDATE_USER, user})

/**
 * THUNK CREATORS
 */

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const fetchUpdatedUser = user => async dispatch => {
  try {
    const res = await axios.post('/api/users/:userId')
    dispatch(res.data || defaultUser)
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  email,
  password,
  firstName,
  lastName,
  address,
  method
) => async dispatch => {
  let res
  try {
    if (method === 'signup') {
      console.log('method: ', method)
      res = await axios.post('/auth/signup', {
        email,
        password,
        firstName,
        lastName,
        address
      })
    } else {
      res = await axios.post('/auth/login', {
        email,
        password
      })
    }
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
