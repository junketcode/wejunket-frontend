import * as React from "react"

import "./HistoryContent.scss"

const HistoryContent = ({ title, detail }) => {
  return (
    <div className="history-content">
      <h3 className="blue-text">{title}</h3>
      <p className="detail-text">{detail}</p>
    </div>
  )
}

export default HistoryContent 