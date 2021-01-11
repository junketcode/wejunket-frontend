import React from "react"
import PricingContent from "../components/2020/PricingContent/PricingContent"
import Head from "next/dist/next-server/lib/head";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/2020/Footer/Footer"
import RevenueSplit from "../components/2020/RevenueSplit/RevenueSplit";
import PricingSection from "../components/PricingSection/PricingSection"

const Pricing = () => {
    return(
        <React.Fragment>
            <Head>
                <title>Pricing | Junket</title>
            </Head>
            <NavBar black />
            {/* <PricingContent /> */}
            <div><br/><br/></div>
            <PricingSection  />
            {/* <RevenueSplit/> */}
            <Footer />
        </React.Fragment>
    )
}

export default Pricing
