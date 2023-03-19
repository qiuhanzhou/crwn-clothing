import { createContext, useState } from 'react'
import SHOP_DATA from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA)
  const values = { products, setProducts }
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  )
}
