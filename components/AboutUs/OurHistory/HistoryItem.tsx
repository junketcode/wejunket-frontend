import * as React from "react"
import HistoryContent from "./HistoryContent/HistoryContent"
import HistoryImg from "./HistoryImg/HistoryImg"
import "./History.scss"


const HistoryItem = ({ index, data }) => {
  if(index % 2 == 0)
    return (
      <div className={`how-work-down ${!index && 'first-history'}`}>
        <HistoryContent className="adventure-exp" {...data} /> 
        <HistoryImg {...data}/>
      </div>
    )

  return (
    <div className="how-work-down mobile-reverse">
      <HistoryImg {...data} />
      <HistoryContent className="adventure-exp" {...data} /> 
    </div>
  )
}

export default HistoryItem 
