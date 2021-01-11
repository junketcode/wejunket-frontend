import * as React from "react"
import PlanTitle from "../PricingComponents/PlanTitle/PlanTitle"
import MonthlyPrice from "../PricingComponents/MonthlyPrice/MonthlyPrice"
import PlanFeatureItem from "../PricingComponents/PlanFeatureItem/PlanFeatureItem"
import SelectBtn from "../PricingComponents/SelectBtn/SelectBtn"
import "./PricePlan.scss"

interface PricePlanProps{
  plan?: String,
  planData?: Object,
  textData?: Object,
}

const PricePlan = (props) => {

  const { plan, planData, textData } = props
  return (
    <div className="price-plan">
      <PlanTitle className={plan} title={planData.title}/>
      <MonthlyPrice 
        className={plan} 
        monthlyPrice={planData.monthlyPrice}
        specialPrice={planData.specialPrice}
        specialText={planData.specialText}
      />

      <PlanFeatureItem checkType={false} value={planData.totalJKTs} mTxt={textData.totalJKTs}/>
      <PlanFeatureItem className={plan} checkType={false} value={planData.numOfJKTs} mTxt={textData.numOfJKTs}/>
      <PlanFeatureItem className={plan} checkType={false} value={planData.pointOfJKT}  mTxt={textData.pointOfJKT}/>
      <PlanFeatureItem className={'wye'} mTxt={textData.wye}/>
      <PlanFeatureItem className={plan} checkType={false} value={planData.outsideApp} mTxt={textData.outsideApp}/>
      <PlanFeatureItem className={plan} checkType={false} value={planData.inApp} mTxt={textData.inApp}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.jktCMS}  mTxt={textData.jktCMS}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.iosAndroid}  mTxt={textData.iosAndroid}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.recording} mTxt={textData.recording}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.imgs} mTxt={textData.imgs}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.mapIcons} mTxt={textData.mapIcons}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.bgAudio} mTxt={textData.bgAudio}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.sellJKTs} mTxt={textData.sellJKTs}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.video} mTxt={textData.video}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.analytics} mTxt={textData.analytics}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.bookbtn} mTxt={textData.bookbtn}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.freeJKTs} mTxt={textData.freeJKTs}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.jktAdventures} mTxt={textData.jktAdventures}/>     
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.trophies} mTxt={textData.trophies}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.integration} mTxt={textData.integration}/>
      <PlanFeatureItem className={'odd'} checkType={true} isTrue={planData.socialFeatures} mTxt={textData.socialFeatures}/>
      <PlanFeatureItem className={'even'} checkType={true} isTrue={planData.nativeAppIntegration} mTxt={textData.nativeAppIntegration}/>
      {/* <SelectBtn className={plan} /> */}
    </div>
  )
}

export default PricePlan
