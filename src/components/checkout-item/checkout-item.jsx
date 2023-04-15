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

  const {
    cartItems,
    setCartItems,
    addItemToCart,
    addItem,
    removeItem,
    clearItemFromCart,
  } = useContext(CartContext)

  return (
    <CheckoutItemContainer>
      <ImageContainer className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemDetails> {name} </CheckoutItemDetails>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemQtyValue>{quantity}</CheckoutItemQtyValue>
        <CheckoutItemArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemDetails> {price}</CheckoutItemDetails>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}
