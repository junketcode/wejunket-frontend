import React, {useState} from "react"

import PricePlan from "./PriceSelect/PricePlan"

import PriceFeature from "./PriceFeature/PriceFeature"
import UsagePopUp from "../2020/UsagePopUp/UsagePopUp";
import "./PricingSection.scss"

const planFeature={
    totalJKTs: "Total Junkets to Breakeven+",
    numOfJKTs: "Number of Junkets",
    pointOfJKT: "Point of Interest",
    wye: "WHAT YOU EARN*",
    outsideApp: "Outside App",
    inApp: "In-App**",
    jktCMS: "Junket CMS",
    iosAndroid: "iOS and Android App",
    recording: "Audio Recordings",
    imgs: "Images",
    mapIcons: "Custom Map Icons",
    bgAudio: "Background Audio",
    sellJKTs: "Sell Junkets",
    video: "Video",
    analytics: "Analytics",
    bookbtn: "Book Button on Your Site",
    freeJKTs: "Free Junkets",
    jktAdventures: "Junket Adventures",
    trophies: "Trohies and Prizes",
    integration: "Website Integration",
    socialFeatures: "Social Features",
    // promoCodes: "Generate Promo Codes",
    nativeAppIntegration: "Native App Integration",
}

const businessPlan={
    title: "Business",
    monthlyPrice: "$99",
    specialPrice: "$120 ",
    specialText: "SAVE $252/year",
    totalJKTs: 16,
    numOfJKTs: 2,
    pointOfJKT: 50,
    wye: "",
    outsideApp: "60%",
    inApp: "40%",
    jktCMS: true,
    iosAndroid: true,
    recording: true,
    imgs: true,
    mapIcons: true,
    bgAudio: true,
    sellJKTs: true,
    video: true,
    analytics: true,
    bookbtn: true,
    freeJKTs: true,
    jktAdventures: true,
    trophies: true,
    integration: true,
    socialFeatures: true,
    // promoCodes: false,
    nativeAppIntegration: false,
}

const startPlan={
    title: "Starter",
    monthlyPrice: "$0",
    specialPrice: "$49 ",
    specialText: "SPECIAL 2020 OFFER",
    totalJKTs: 0,
    numOfJKTs: 1,
    pointOfJKT: 25,
    wye: "",
    outsideApp: "50%",
    inApp: "25%",
    jktCMS: true,
    iosAndroid: true,
    recording: true,
    imgs: true,
    mapIcons: true,
    bgAudio: true,
    sellJKTs: true,
    video: true,
    analytics: true,
    bookbtn: true,
    freeJKTs: false,
    jktAdventures: false,
    trophies: false,
    integration: false,
    socialFeatures: false,
    // promoCodes: false,
    nativeAppIntegration: false,
}

const junketeerPlan={
    title: "Junketeer",
    monthlyPrice: "$119",
    specialPrice: "$175 ",
    specialText: "SAVE $672/year",
    totalJKTs: 8,
    numOfJKTs: 3,
    pointOfJKT: 75,
    wye: "",
    outsideApp: "70%",
    inApp: "50%",
    jktCMS: true,
    iosAndroid: true,
    recording: true,
    imgs: true,
    mapIcons: true,
    bgAudio: true,
    sellJKTs: true,
    video: true,
    analytics: true,
    bookbtn: true,
    freeJKTs: true,
    jktAdventures: true,
    trophies: true,
    integration: true,
    socialFeatures: true,
    // promoCodes: true,
    nativeAppIntegration: true,
}

const PricingSection = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModalHandler = () => {
        setModalOpen(true)
    }

    const closeModalHandler = () => {
        setModalOpen(false)
    }

  return (
    <div className="md:flex md:items-center price-section">
        <UsagePopUp closeModalHandler={closeModalHandler} modalOpen={modalOpen}/>
        <div className="price-container">
            <div className="pricing-description">
                <h2 className="title">Pricing</h2>
                <p className="description">Create, publish, and monetize your experiences with the Junket platform.</p>
                <img className="sufering" src={require("../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
            </div>
                <div className="price-plan-part">
                    <div className="price-plan-section">
                        <PriceFeature className={'price-feature'} data={planFeature}/>
                        <PricePlan plan={'starter'} planData={startPlan} textData={planFeature}/>
                        <PricePlan plan={'business'} planData={businessPlan} textData={planFeature}/>
                        <PricePlan plan={'junketeer'} planData={junketeerPlan} textData={planFeature}/>
                    </div>
                    <div className="plan-additional">
                        <p > Additional Junkets may be added to each plan at $29/monthly</p>
                        <a className="see-more" style={{cursor: "pointer"}} onClick={openModalHandler}>See Prices for Additional Services and Usage Fees</a>
                    </div>
                    <div className="price-plan-description">
                        <p className="outside-app">Outside App: Purchases made from your website and places not in the app</p>
                        <p>**Percentage Calculated After Google And Apple's Commissions</p>
                        <p>*In-App: Purchases made inside the app are subject to a 30% commission from Apple and Google based on outside app sales</p>
                    </div>
                </div>
            
        </div>
        
    </div>
  )
}

export default PricingSection
