import * as React from "react"
import clsx from 'clsx'
import "./PlanTitle.scss"

interface PlanTitleProps{
  className?: String,
  title?: String
}

const PlanTitle = (props) => {

  const {className, title} = props
  
  return (
    <div className={clsx('price-plan-title', className)}>
      <p className="plan-title">{title}</p>
    </div>
  )
}

export default PlanTitle
