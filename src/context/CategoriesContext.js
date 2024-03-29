import { createContext, useState, useEffect } from 'react'

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils'

import SHOP_DATA from '../shop-data'

export const CategoriesContext = createContext({
  categoriesMap: [],
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  //only call once

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  //retrieve categories from firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      console.log(categoriesMap)
      setCategoriesMap(categoriesMap)
    }
    getCategoriesMap()

    // getCategoriesAndDocuments().then((categoriesMap) => {
    //   console.log(categoriesMap)
    //   setCategoriesMap(categoriesMap)
    // })
  }, [])

  const value = { categoriesMap, setCategoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
