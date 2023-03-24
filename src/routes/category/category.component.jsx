import { useContext, useEffect, useState } from 'react'
import { CategoryContainer, Title } from './category.styles.jsx'

import { CategoriesContext } from '../../context/CategoriesContext'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'

//conditionallyn render category sub route based on category param
const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const { category } = useParams() //access to category param

  const [products, setProducts] = useState(categoriesMap[category])

  //hook products up with variables
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  )
}

export default Category
