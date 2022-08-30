import Button from '../Button/Button'
import './product-card.styles.scss'

//destructure propduct from props to be received from outside
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'> Add to card </Button>
    </div>
  )
}
