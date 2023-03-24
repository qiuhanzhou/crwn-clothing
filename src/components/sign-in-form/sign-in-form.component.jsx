import useForm from '../../hooks/useForm'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import { SigInContainer, ButtonContainer } from './sign-in-form.styles'

const SignInForm = () => {
  // const [formFields, setFormFields] = useState(defaultFormFields);
  // const { email, password } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const { setCurrentUser } = useContext(UserContext)

  const defaultFormFields = {
    email: '',
    password: '',
  }
  const { values, handleChange, resetValues } = useForm(defaultFormFields)

  const { email, password } = values

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      // setCurrentUser(user)
      resetValues()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormFields({ ...formFields, [name]: value });
  // };

  return (
    <SigInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SigInContainer>
  )
}

export default SignInForm
