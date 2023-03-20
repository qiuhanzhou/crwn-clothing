import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './checkout-item.styles.scss'

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
