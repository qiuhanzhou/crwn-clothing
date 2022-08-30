import SHOPDATA from '../../shop-data.json'
import ProductCard from '../../Components/product-card/Product-card'
import './shop.styles.scss'

export default function Shop() {
  return (
    <div className='products-container'>
      {SHOPDATA.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
