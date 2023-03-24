import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles.jsx'

const BUTTON_TYPE_STYLED_COMPONENTS = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
}

const Button = ({ children, buttonType = 'base', ...otherProps }) => {
  const CustomButton = BUTTON_TYPE_STYLED_COMPONENTS[buttonType]

  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
