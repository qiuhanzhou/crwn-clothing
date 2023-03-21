import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={`/shop/${title}`}>
          <span> {title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  )
}

export default CategoryPreview