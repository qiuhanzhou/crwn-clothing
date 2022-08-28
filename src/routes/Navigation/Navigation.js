import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import UserContext from '../../context/user.context'
import '../Navigation/navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
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
        </div>
      </div>
      <Outlet />
      {/*decide where child route component show*/}
    </Fragment>
  )
}
