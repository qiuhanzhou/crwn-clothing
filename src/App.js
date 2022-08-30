import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation'
import Shop from './routes/Shop/Shop'
import Authentication from './routes/Authentication/Authentication'

import UserContext from './context/user.context'

import { useEffect, useState } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'
import { ProductContext } from './context/products.context'
import PRODUCTS from './shop-data.json'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}
