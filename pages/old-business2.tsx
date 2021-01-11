import React from "react"
import {Helmet} from "react-helmet"
import loadable from "@loadable/component"
import NavBar from "../components/NavBar/NavBar"
import BusinessSignUp from "../components/2020/BusinessSignUp/BusinessSignUp"
import PricingSection from "../components/PricingSection/PricingSection"


const BusinessPage = loadable(() =>
  import("../components/2020/BusinessPage/BusinessPage")
)

const Footer = loadable(() => import("../components/2020/Footer/Footer"))

// const PricingContent = loadable(() =>
//   import("../components/2020/PricingContent/PricingContent")
// )

// const RevenueSplit = loadable(() =>
//   import("../components/2020/RevenueSplit/RevenueSplit")
// )

const WebinarWidget = loadable(() =>
  import("../components/2020/WebinarWidget/WebinarWidget")
)

const Business = () => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Business | Junket</title>
        <meta
          name="description"
          content="See what Junket can do for your business!"
        />
        <script
          src="https://www.bigmarker.com/widget/register_widget.js?club=junket1&conference=82cb58cd73c3&widget_type=image_register&series_register=&upcoming_sub_title=&live_sub_title=&rec_sub_title=&upcoming_button_text=&live_button_text=&rec_button_text=&link_to_channel=true&background_color=ffffff&btext_color=2d374d&link_color=1089f5&ltext_color=ffffff&cid=8ef76ac98528"
          type="text/javascript"
        />
      </Helmet>
      <NavBar black />
      <BusinessSignUp />
      <BusinessPage />
      <WebinarWidget />
      <PricingSection />
      {/* <PricingContent /> */}
      {/* <RevenueSplit /> */}
      <Footer />
    </React.Fragment>
  )
}

export default Business
