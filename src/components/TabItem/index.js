import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabs, isActive} = props
  const {displayText, tabId} = tabDetails
  const onclickTabItem = () => {
    updatedActiveTabs(tabId)
  }

  const activeTabItemClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabItemClass}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
