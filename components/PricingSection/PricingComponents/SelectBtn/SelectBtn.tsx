import * as React from "react"
import clsx from 'clsx'
import Link from "next/link"
import environment from "../../../../environment/environment"
import "./SelectBtn.scss"

interface SelectBtnProps{
  className?: String
}

const SelectBtn = (props) => {

  const { className } = props

  const signup = "/sign-up"
  const business = "/sign-up?monthly="+environment.BUSINESS_MONTHLY+"&yearly="+environment.BUSINESS_YEARLY+"&planName=business"
  const junketeer = "/sign-up?monthly="+environment.BUSINESS_MONTHLY+"&yearly="+environment.BUSINESS_YEARLY+"&planName=junketeer"

  return (
    <div className={clsx('price-plan-select', className)}>
        {/* Starter Button */}
        {
            className=="starter"&&
            <a href={signup}>
                <button>Select Plan</button>
            </a> 
        }

        {/* Business Button */}
        {
            className=="business"&&
            <a href={business}>
                <button>Select Plan</button>
            </a> 
        }

        {/* Junketeer Button */}
        {
            className=="junketeer"&&
            <a href={junketeer}>
                <button>Select Plan</button>
            </a> 
        }
    </div>
  )
}

export default SelectBtn
