import * as React from "react"
import Fade from 'react-reveal/Fade'
import PricingDescribe from "../PricingDescribe/PricingDescribe"
import clsx from 'clsx'
import PlanFeatureItem from "../PricingComponents/PlanFeatureItem/PlanFeatureItem"
import "./PriceFeature.scss"

interface PriceFeatureProps {
  className?: String,
  data?: Object
}

const PriceFeature = (props) => {

  const { className, data } = props
  
  return (
    <div className={clsx("price-feature", className)}>
      {/* <Fade left wait={2000}> */}
          <PricingDescribe />
      {/* </Fade> */}
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.totalJKTs}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.numOfJKTs}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.pointOfJKT}/>
      <PlanFeatureItem className={'even feature wye'} checkType={false} value={data.wye}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.outsideApp}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.inApp}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.jktCMS}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.iosAndroid}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.recording}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.imgs}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.mapIcons}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.bgAudio}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.sellJKTs}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.video}/>
      <PlanFeatureItem className={'odd feature' } checkType={false} value={data.analytics}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.bookbtn}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.freeJKTs}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.jktAdventures}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.trophies}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.integration}/>
      <PlanFeatureItem className={'odd feature'} checkType={false} value={data.socialFeatures}/>
      <PlanFeatureItem className={'even feature'} checkType={false} value={data.nativeAppIntegration}/>
    </div>
  )
}

export default PriceFeature