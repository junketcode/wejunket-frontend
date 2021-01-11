import * as React from "react"
import "./BusinessPhone.scss"

interface BusinessImgProps{
  imgName?: string,
  fromWhat?: boolean
}

const BusinessPhone = (props:BusinessImgProps) => {

  const { imgName,fromWhat } = props

  if(!fromWhat) {
    return (
      <div className="business-img">
      
        <div className={imgName} >
          <img className="forground" src={require(`../../../../public/img/v2/${imgName}.svg`)} alt=""/>
        </div>

      </div>
    )
  }

  return (
    <div className="business-img">
    
      <div className={imgName} >
        <img className="forground" src={require(`../../../../public/img/pages/whatisjunk/${imgName}.png`)} alt=""/>
      </div>

    </div>
  )
}

export default BusinessPhone