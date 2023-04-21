import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})
