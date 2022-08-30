import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import '../Navigation/navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../context/user.context'
import CartIcon from '../../Components/Cart-icon/Cart-icon'
import CartDropdown from '../../Components/Cart-dropdown/Cart-dropdown'
import { CartContext, CartProvider } from '../../context/cart.context'

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  console.log(currentUser)

  const signOutUserHandler = async () => {
    const res = await signOutUser()
    console.log(res) // undefined - meaning successfuly signed out with no user
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUserHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}{' '}
        {/*if the total is true, return the last statement, which is the component*/}
      </div>
      <Outlet />
      {/*decide where child route component show*/}
    </Fragment>
  )
}
