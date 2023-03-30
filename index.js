import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item" key={id}>
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt="domain logo" />
      <p className="title">
        {title} <span className="domain-url">{domainUrl}</span>
      </p>
      <button className="delete-icon" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
