import axios from 'axios'
import history from '../history'

const GET_PRODUCT = 'GET_PRODUCT'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

const initialState = {}

const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const setSingleProduct = product => {
  return {type: SET_SINGLE_PRODUCT, product}
}

export const fetchProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const setSingleProductThunk = productId => dispatch => {
  axios
    .get(`/api/products/${productId}`)
    .then(res => {
      dispatch(setSingleProduct(res.data))
    })
    .catch(err => console.log(err))
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
