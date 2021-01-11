import * as React from "react"
import clsx from 'clsx'
import './MonthlyPrice.scss'

interface MonthlyPriceProps{
  className?: String,
  monthlyPrice?: String,
  specialPrice?: String,
  specialText?: String
}

const MontlyPrice = (props) => {
  const { className, monthlyPrice, specialPrice, specialText } = props
  return (
    <div className={clsx('price-plan-monthly', className)}>
      <p className="monthy-price">{monthlyPrice}/month</p>
      <p className="bill-annually">Billed Annually</p>
      <div className="year-price">
        <p className="old-price">{specialPrice}</p>
        <p className="saved-money">{specialText}</p>
      </div>
    </div>
  )
}

export default MontlyPrice
