import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activedClassName = isActive ? 'active-class' : ''

  return (
    <button
      type="button"
      className={`listItem ${activedClassName}`}
      onClick={onClickTabItem}
    >
      {displayText}
    </button>
  )
}
export default TabItem
