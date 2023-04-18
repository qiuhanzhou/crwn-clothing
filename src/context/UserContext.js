import { createContext, useEffect, useState } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

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
    case 'user/set_current_user':
      return { ...state, currentUser: action.payload }

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  //centralizing current user setter
  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    // clean up - cancel listener before unmounts
    return unsubsribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
