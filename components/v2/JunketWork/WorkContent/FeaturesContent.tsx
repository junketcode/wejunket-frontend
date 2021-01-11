import * as React from "react"
import "./FeaturesContent.scss"

const FeaturesContent = (props) => {
  const {data} = props
  return (
    <div className="features-content">
      <h3 className="blue-text">{data.title}</h3>
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

export default FeaturesContent 