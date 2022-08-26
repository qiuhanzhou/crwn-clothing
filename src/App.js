import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation'
import Shop from './routes/Shop/Shop'
import Authentication from './routes/Authentication/Authentication'

import UserContext from './context/user.context'

import { useState } from 'react'

export default function App() {
  //set current user state
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<Authentication />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  )
}
