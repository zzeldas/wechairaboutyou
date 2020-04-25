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
const initialState = {
  orders: [],
  pending: {}
}

/**
 * ACTION CREATORS
 */
const getAllOrders = orders => ({
  type: GET_ALL_ORDERS,
  orders
})

const getPendingOrder = pending => ({
  type: GET_PENDING_ORDER,
  pending
})
/**
 * THUNK CREATORS
 */
// export const fetchAllOrders = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/users')

//     dispatch(getAllUsers(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

export const fetchPendingOrder = () => async dispatch => {
  try {
    const res = await axios.get('/cart')
    dispatch(getPendingOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return action.orders
    case GET_PENDING_ORDER:
      return action.pendingOrder
    default:
      return state
  }
}
