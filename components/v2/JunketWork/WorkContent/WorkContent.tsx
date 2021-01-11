import * as React from "react"

import "./WorkContent.scss"

const WorkContent = (props) => {
  const {data} = props
  return (
    <div className="work-content">
      {data.title && <h3 className="blue-text">{data.title}</h3>}
      {data.detail && <h3 className="detail-text">{data.detail}</h3>}
      <div className="feature-list">
        <ul>
          {
            data.list.map((item, i)=>(
              <li key={i} className="feature-item">
                <img src={require("../../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>{item}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default WorkContent 