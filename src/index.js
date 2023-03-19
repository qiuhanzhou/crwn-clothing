import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
)
