import './sign-up-form.styles.scss'
import { useState, useContext } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../Form-input/Form-input'
import Button from '../Button/Button'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  //async function because we are generating user doc inside firebase
  async function handleOnSubmit(e) {
    e.preventDefault()
    //confirm 2 passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })

      setFormFields(defaultFormFields)
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      }
      console.log(err)
    }
  }

  function handleOnChange(e) {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleOnChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleOnChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleOnChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleOnChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button buttonType='Google' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  )
}
