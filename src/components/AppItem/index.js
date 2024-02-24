import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-items">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <div>
        <p className="app-title">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
