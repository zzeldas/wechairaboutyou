import axios from 'axios'
import redux from 'react-redux'
import history from '../history'

// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const GET_CART = 'GET_CART'

// ACTION CREATORS

const getCart = cart => ({
  type: GET_CART,
  cart
})

const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

//THUNKS

export const fetchCart = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/carts/cart')

    dispatch(getCart(data[0]))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {}
// REDUCERS
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
