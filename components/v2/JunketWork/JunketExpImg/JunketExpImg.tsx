import * as React from "react"

import "./JunketExpImg.scss"

interface JunketExpImgProps{
  imgName?: string
}

const JunketExpImg = (props:JunketExpImgProps) => {

  const { imgName } = props

  return (
    <div className="junket-exp-img">
    
      <div className={imgName} >
        <img className="forground" src={require(`../../../../public/img/v2/${imgName}.png`)} alt=""/>
        <img className="background" src={require(`../../../../public/img/v2/${imgName}.svg`)} alt=""/>
      </div>

    </div>
  )
}

export default JunketExpImg 