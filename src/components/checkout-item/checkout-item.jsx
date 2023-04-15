import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemDetails,
  CheckoutItemQuantity,
  CheckoutItemArrow,
  CheckoutItemQtyValue,
  RemoveButton,
} from './checkout-item.styles'

export default function CheckoutItem({ cartItem }) {
  const { imageUrl, price, name, quantity } = cartItem

  const { cartItems, setCartItems, removeItemFromCart } =
    useContext(CartContext)

  return (
    <CheckoutItemContainer>
      <ImageContainer className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemDetails> {name} </CheckoutItemDetails>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={removeItemFromCart}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemQtyValue>{quantity}</CheckoutItemQtyValue>
        <CheckoutItemArrow onClick={addItemHandler}>&#10095;</CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemDetails> {price}</CheckoutItemDetails>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
