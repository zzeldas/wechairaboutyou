import {combineReducers} from 'redux'
import userReducer from './singleUser'
import usersReducer from './users'

const appReducer = combineReducers({
  users: usersReducer,
  user: userReducer
})

export default appReducer
