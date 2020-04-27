import {combineReducers} from 'redux'
import userReducer from './singleUser'
import usersReducer from './users'
import productsReducer from './products'
import productReducer from './singleProduct'
import cartReducer from './cart'
import ordersReducer from './confirmationpage'

const appReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  singleOrder: ordersReducer
})

export default appReducer
