import * as React from "react"
import "./OrgContent.scss"

const OrgContent = (props) => {
  const {data} = props
  return (
    <div className="org-content">
      <div className="org-list">
        <ul>
          {
            data.list.map((item, i)=>(
              <li key={i} className="org-item">
                <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/>
                <div className="list-cont">
                    <p className="blue-text">{item[0]}</p>
                    <p className="list-text">{item[1]}</p>
                    <p className="list-text">{item[2]}</p>   
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default OrgContent 