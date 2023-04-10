import { createContext, useEffect, useState } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})


function currentUserReducer(state, action) {
  switch (action.type) {
    case 'set_current_user': {
      return {
        ...state,
        currentUser:payload
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null)
  // const value = { currentUser, setCurrentUser }

  //converting useState to useReducer
  const [currentUser, dispatch] = useReducer(currentUserReducer, initialCurrentUser);

  function setCurrentUser(user) {
    dispatch(
      // "action" object:
      {
        type: 'set_current_user',
        payload: user
      }
    );
  }

function setCurrentUser()
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
