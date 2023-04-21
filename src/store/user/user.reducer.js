// Define an initial state value for the app
const initialState = {
  currentUser: null,
}

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function currentUserReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'user/SET_CURRENT_USER':
      return { ...state, currentUser: action.payload }

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
