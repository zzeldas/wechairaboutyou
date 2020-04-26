import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const CHANGE_ORDER_STATUS = 'CHANGE_ORDER_STATUS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const getOrderStatus = orderId => ({
  type: GET_ALL_PRODUCTS,
  orderId
})

/**
 * THUNK CREATORS
 */
export const fetchChangeOrderStatus = orderId => async dispatch => {
  try {
    const res = await axios.put(`/api/carts/cart/${orderId}`)
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.allProducts
    default:
      return state
  }
}
