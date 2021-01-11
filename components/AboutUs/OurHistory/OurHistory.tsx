import * as React from "react"
import HistoryItem from './HistoryItem'
import historyData from './history.json'
import "./History.scss"

const OurHistory = ({}) => {

  const renderHistoryData = () => historyData.map((data, i) => <HistoryItem index={i} data={data} key={i} />)

  return (
    <div className="our-history container">
      <h3 className="grey-title">Our History</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <p className="history-explain">
        Junket was born out of waiting for a delayed tour group in the rain. Founder, Lance Zaal, quickly realized there was a lot more that could be done with a just small leap in thinking.” To “Junket was born out of a cancelled tour group due to the rain. Junket’s founder quickly realized there was a lot more that could be done with a just small leap in thinking.
      </p>
      {renderHistoryData()}
    </div>
  )
}

export default OurHistory 
