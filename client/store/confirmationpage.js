import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'
const CREATE_PENDING_ORDER = 'CREATE_ORDER'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */

const getSingleOrder = order => ({
  type: GET_SINGLE_ORDER,
  order
})

const createPendingOrder = userId => ({
  type: CREATE_PENDING_ORDER,
  userId
})

export const fetchSingleCompletedOrder = orderId => async dispatch => {
  try {
    const res = await axios.get(`/api/carts/cart/${orderId}`) //FIXME
    dispatch(getSingleOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchCreatePendingdOrder = userId => async dispatch => {
  try {
    const res = await axios.post(`/api/carts/cart/${userId}`) //FIXME need to get the route
  } catch (err) {
    console.error(err)
  }
}

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return action.order
    default:
      return state
  }
}
