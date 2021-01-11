import * as React from "react"
import clsx from 'clsx'
import "./PricingDescribe.scss"

interface PricingDescribeProps{
  className?: String
}

const PricingDescribe = (props) => {
  const { className } = props
  return (
    <div className={clsx('price-describe', className)}>
      <div className="price-stars">
          <ul>
              <li> <img className="price-star" src={require("../../../public/img/v2/icons/blue-star.svg")} alt="star icon"/> <p className="price-feature-text">  No maintenace - easy to use </p></li>
              <li> <img className="price-star" src={require("../../../public/img/v2/icons/blue-star.svg")} alt="star icon"/> <p className="price-feature-text">  Manage compelling experiences </p></li>
              <li> <img className="price-star" src={require("../../../public/img/v2/icons/blue-star.svg")} alt="star icon"/> <p className="price-feature-text">  Make changes instantly </p></li>
          </ul>
      </div>
    </div>
  )
}

export default PricingDescribe
