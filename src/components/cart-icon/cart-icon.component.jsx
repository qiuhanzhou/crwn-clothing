import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/CartContext'

import {
  ShoppingIconComponent,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconComponent src={ShoppingIcon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
