import axios from 'axios'
import redux from 'react-redux'
import history from '../history'

// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

// ACTION CREATORS
export const getCart = item => ({
  type: ADD_TO_CART,
  item
})

//THUNKS

export const fetchCart = (item, user) => async dispatch => {
  try {
    //FIXME
    console.log('Hi')
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  items: [],
  total: 0
}
// REDUCERS
