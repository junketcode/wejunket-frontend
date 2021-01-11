import * as React from "react"

import "./HistoryImg.scss"

interface HistoryImgProps{
  foreground?: string
  background?: string
  image?: string
}

const HistoryImg = (props:HistoryImgProps) => {

  const { image } = props

  return (
    <div className="junket-exp-img">
      <div>
        <img className="forground" src={require(`../../../../public/img/pages/aboutus/${image}`)} alt=""/>
      </div>
    </div>
  )
}

export default HistoryImg 