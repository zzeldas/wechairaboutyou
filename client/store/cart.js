import axios from 'axios'
import redux from 'react-redux'
import history from '../history'

// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const GET_CART = 'GET_CART'
const UPDATE_QTY = 'UPDATE_QTY'

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
export const updateQty = item => ({
  type: UPDATE_QTY,
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
export const fetchCreateProduct = product => async dispatch => {
  try {
    // const {data} = await axios.post('/api/carts/cart', {item, quantityToAdd})
    const resFromGet = await axios.get('/api/carts/cart')
    const orderInfo = resFromGet.data[0]
    const orderProductsInfo = resFromGet.data[0].orderproducts

    let orderproductId = orderProductsInfo.map(eachP => eachP.productId)

    if (orderproductId.includes(product.id)) {
      const resFromPut = await axios.put('/api/carts/cart', {product})
      console.log('RES FROM PUT DATA: ', resFromPut.data)
      dispatch(addToCart(resFromPut.data))
    } else {
      const resFromPost = await axios.post('/api/carts/cart', {
        product,
        orderInfo,
        resFromGet
      })
      dispatch(addToCart(orderInfo))
    }
  } catch (err) {
    console.error(err)
  }
}

export const fetchRemovedItem = item => async dispatch => {
  try {
    console.log('i am deleting item thunk', item)
    const itemId = item.id
    const {data} = await axios.delete(`/api/carts/cart/${itemId}`)
    console.log('thunk delete this item', data)
    dispatch(removeItem(item))
  } catch (err) {
    console.error(err)
  }
}

export const increaseQty = id => async dispatch => {
  const resFromIncrease = await axios.put(`/api/carts/cart/${id}/increase`)
  console.log('AFTER PUT: ', resFromIncrease)
  const updatedCart = await axios.get(`/api/carts/cart/${id}/updateQty`)
  console.log('UPDATED CART FROM GET: ', updatedCart.data)
  dispatch(getCart(updatedCart.data[0]))
}

export const decreaseQty = id => async dispatch => {
  const resFromDecrease = await axios.put(`/api/carts/cart/${id}/decrease`)
  const updatedCart = await axios.get(`/api/carts/cart/${id}/updateQty`)
  dispatch(getCart(updatedCart.data[0]))
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
        cart: state.orderproducts.filter(item => item.id !== action.item.id)
      }
    case UPDATE_QTY:
      return {...state, cart: action.item}
    default:
      return state
  }
}
