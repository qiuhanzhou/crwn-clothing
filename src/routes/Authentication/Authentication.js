import SignUpForm from '../../Components/sign-up-form/SignUpForm'
import SignInForm from '../../Components/sign-in-form/SignInForm'

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
