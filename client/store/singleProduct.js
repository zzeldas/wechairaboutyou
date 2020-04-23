import axios from 'axios'
import history from '../history'

const GET_PRODUCT = 'GET_PRODUCT'

const initialState = {}

const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const fetchProduct = () => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`)
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    default:
      return state
  }
}
