import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'

export default function Shop() {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  )
}
