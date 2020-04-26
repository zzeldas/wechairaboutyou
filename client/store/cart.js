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

const removeItem = item => ({
  type: REMOVE_ITEM,
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
//
export const fetchCreateProduct = (
  product,
  quantityToAdd
) => async dispatch => {
  try {
    const {data} = await axios.post('/api/carts/cart', {item, quantityToAdd})

    dispatch(addToCart(data[0]))
  } catch (err) {
    console.error(err)
  }
}

export const fetchRemovedItem = item => async dispatch => {
  try {
    console.log('i am deleting item thunk', item)
    const itemId = item.id
    const {data} = await axios.delete(`/api/carts/cart/:${itemId}`)
    console.log('thunk delete this item', data)
    dispatch(removeItem(item))
  } catch (err) {
    console.error(err)
  }
}
const initialState = {
  cart: {},
  orderproducts: []
}
// REDUCERS

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, cart: action.cart}
    case ADD_TO_CART:
      return {...state, orderproducts: [...state.orderproducts, action.item]}
    case REMOVE_ITEM:
      return {
        ...state,
        orderproducts: [...state.filter(item => item !== action.item)]
      }
    default:
      return state
  }
}
