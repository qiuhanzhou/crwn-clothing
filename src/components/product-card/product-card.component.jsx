import {
  ProductCartContainer,
  ProductImg,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx'
import { useContext } from 'react'

import Button from '../button/button.component'

import { CartContext } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)

  //{name:'',price:2,imgUrl:''}
  const { name, price, imageUrl } = product

  const handlerOnAddToCart = () => {
    addItemToCart(product)
  }
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType='inverted' onClick={handlerOnAddToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard
