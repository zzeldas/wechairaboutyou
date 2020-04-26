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
//
export const fetchCreateProduct = product => async dispatch => {
  try {
    const resFromGet = await axios.get('/api/carts/cart')
    const orderInfo = resFromGet.data[0]
    const orderProductsInfo = resFromGet.data[0].orderproducts

    let orderproductId = orderProductsInfo.map(eachP => eachP.productId)

    if (orderproductId.includes(product.id)) {
      const resFromPut = await axios.put('/api/carts/cart', {product})
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
    default:
      return state
  }
}
