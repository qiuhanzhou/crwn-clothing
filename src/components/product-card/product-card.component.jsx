import './product-card.styles.scss'
import { useContext } from 'react'

import Button from '../button/button.component'

import { CartContext } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)

  //{name:'',price:2,imgUrl:''}
  const { name, price, imageUrl } = product

  const handlerOnAddToCart = () => {
    console.log(product)
    addItemToCart(product)
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handlerOnAddToCart}>
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
