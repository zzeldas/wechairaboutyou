import axios from 'axios'
import history from '../history'

const GET_PRODUCT = 'GET_PRODUCT'

const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const initialState = {}

const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
})

export const fetchProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteProduct = id => {
  return async dispatch => {
    await axios.delete(`/api/products/${id}`)
    dispatch(removeProduct(id))
  }
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    case REMOVE_PRODUCT:
      return action.id
    default:
      return state
  }
}
