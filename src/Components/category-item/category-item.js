import './category-item.styles.scss'

export default function CategoryItem({ category }) {
  //define category object which is ready to be received from outside

  //destructure the variable inside category object to be received
  const { title, imageUrl } = category

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
