import React from "react"
import {Helmet} from "react-helmet"
import NavBar from "../components/v2/NavBar/NavBar"
import WhatIsJunketBanner from "../components/v2/WhatIsJunketBanner/WhatIsJunketBanner"
import Footer from "../components/Footer/Footer"
import FindJunkets from "../components/v2/FindJunkets/FindJunkets"
import GetStarted from "../components/v2/GetStarted/GetStarted"
import TwoTypes from "../components/v2/JunketWork/TwoTypes"
import TakeAndMakeJunket from "../components/v2/TakeAndMakeJunket/TakeAndMakeJunket"
import OtherThings from "../components/v2/OtherThings/OtherThings"
import WhereNext from "../components/v2/WhereNext/WhereNext"


const WhatIsJunket = () => {


  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>What is | Junket</title>
        <meta
          name="description"
          content="Learn how Junket works!"
        />
      </Helmet>
      <NavBar black />
      <WhatIsJunketBanner />
      <FindJunkets />
      <GetStarted />
      <TwoTypes />
      <OtherThings />
      <WhereNext />
      <TakeAndMakeJunket />
      <Footer />
    </React.Fragment> 
  )
}

export default WhatIsJunket
