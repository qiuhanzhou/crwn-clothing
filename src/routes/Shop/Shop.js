import SHOPDATA from '../../shop-data.json'

export default function Shop() {
  return (
    <div>
      {SHOPDATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  )
}
