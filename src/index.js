import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { CategoriesProvider } from './context/CategoriesContext'
import { CartProvider } from './context/CartContext'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
)
