import Button from '../Button/Button'
import './cart-dropdown.styles.scss'

export default function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
