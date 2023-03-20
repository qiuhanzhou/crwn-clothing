import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './checkout-item.styles.scss'

export default function CheckoutItem({ cartItem }) {
  const { imageUrl, price, name, quantity } = cartItem

  const { cartItems, setCartItems } = useContext(CartContext)

  const removeItemHandler = (e) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const addItemHandler = (e) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const clearItemHandler = (e) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id))
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}
