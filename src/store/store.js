// import { compose, createStore, applyMiddleware } from 'redux'
// import { rootReducer } from './root-reducer'

// export const store = createStore(rootReducer, undefined, composedEnhancers)
// store.dispatch()

import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'

const initState = {
  todos: [],
  posts: [],
}
function reducer(state = initState, action) {
  console.log(action)
}
const store = configureStore({ reducer: rootReducer })

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' }
store.dispatch(todoAction)
