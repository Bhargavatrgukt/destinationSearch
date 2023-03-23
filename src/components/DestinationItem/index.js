import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="card">
      <img src={imgUrl} className="image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
