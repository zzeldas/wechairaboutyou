import {combineReducers} from 'redux'
import userReducer from './singleUser'
import usersReducer from './users'
import productsReducer from './products'

const appReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  products: productsReducer
})

export default appReducer
