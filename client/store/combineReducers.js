import {combineReducers} from 'redux'
import userReducer from './singleUser'
import usersReducer from './users'
import productsReducer from './products'
import productReducer from './singleProduct'
import cartReducer from './cart'
import ordersReducer from './confirmationpage'
import categoriesReducer from './categories'

const appReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  singleOrder: ordersReducer,
  categories: categoriesReducer
})

export default appReducer
