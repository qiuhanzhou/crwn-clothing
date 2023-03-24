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

  const { cartItems, setCartItems } = useContext(CartContext)

  const removeItemHandler = () => {
    //if current qty is 1, remove item from cart completely
    if (quantity === 1) {
      clearItemHandler()
    }
    //else reduce qty by 1
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItem.id ? { ...item, quantity: quantity - 1 } : item,
        ),
      )
    }
  }

  const addItemHandler = () => {
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: quantity + 1 } : item,
      ),
    )
  }

  const clearItemHandler = () => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemDetails> {name} </CheckoutItemDetails>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={removeItemHandler}>
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
