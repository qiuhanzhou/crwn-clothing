import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
import { Fragment } from 'react/cjs/react.production.min'

export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log(Object.keys(categoriesMap))
  //{hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}

  return Object.keys(categoriesMap).map((categoryTitle) => (
    <Fragment key={categoryTitle}>
      <h2>{categoryTitle}</h2>
      <div className='products-container'>
        {categoriesMap[categoryTitle].map((item) => (
          <ProductCard product={item} key={item.id}></ProductCard>
        ))}
      </div>
    </Fragment>
  ))
}
