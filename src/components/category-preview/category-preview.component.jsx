import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`/shop/${title}`}>
          <span> {title.toUpperCase()}</span>
        </Link>
      </Title>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
