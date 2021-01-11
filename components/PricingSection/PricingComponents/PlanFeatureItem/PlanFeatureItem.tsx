import * as React from "react"
import clsx from 'clsx'
import './PlanFeatureItem.scss'

interface PlanFeatureItemProps {
    className?: String,
    value?: String,
    checkType?: Boolean,
    isTrue?: Boolean,
    mTxt?: String,
}

const PlanFeatureItem = (props: PlanFeatureItemProps) => {
    const { className, value, checkType, isTrue, mTxt } = props;
  return (
    <div className={clsx('price-plan-feature', className)}>
        <div className="mobile-txt">
            {mTxt}
        </div>
        {
            checkType && <div>
                {
                    isTrue?<img src={require("../../../../public/img/icons/check.svg")} alt="check mark"/>:<img src={require("../../../../public/img/icons/close.svg")} alt="x mark"/>
                }
            </div>
        }
        {
            !checkType && <p>{value}</p>
        }
    </div>
  )
}

// PlanFeatureItem.getInitialProps = ctx =>{
//     return {
//         className: null,
//         value: 8,
//         checkType: false,
//         isTrue: true
//     }
// }

export default PlanFeatureItem
