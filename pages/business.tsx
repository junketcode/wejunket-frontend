import React, { useState } from "react"
import {Helmet} from "react-helmet"
import loadable from "@loadable/component"
import NavBar from "../components/v2/NavBar/NavBar"
import BusinessSignUp from "../components/v2/BusinessSignUp/BusinessSignUp"
import PersonalUse from "../components/v2/PersonalUse/PersonalUse"
import JunketFeatures from "../components/v2/JunketWork/JunketFeatures"
import NewFeatures from "../components/v2/NewFeatures/NewFeatures"
import PricingSection from "../components/PricingSection/PricingSection"
import Footer from "../components/Footer/Footer"
import Destinations from "../components/v2/Organizations/Destinations/Destinations"
import TeamBuilding from "../components/v2/Organizations/TeamBuilding/TeamBuilding"
import HowCreate from "../components/v2/HowCreate/HowCreate"
import Resources from "../components/v2/Resources/Resources"

const YouTubeModal = loadable(() =>
  import("../components/v2/YouTubeModal/YouTubeModal")
)

// const PricingContent = loadable(() =>
//   import("../components/2020/PricingContent/PricingContent")
// )

// const RevenueSplit = loadable(() =>
//   import("../components/2020/RevenueSplit/RevenueSplit")
// )

const Business = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const [videoUrl, setVideoUrl] = useState("")
  //TODO: Retrieve free junkets and display junkets near user

  const openModalHandler1 = () => {
    setVideoUrl("https://www.youtube.com/embed/PyoklUqTndg?autoplay=0&modestbranding=1&color=white")
    setModalOpen(true)
  }

  const openModalHandler2 = () => {
    setVideoUrl("https://www.youtube.com/embed/SnpomuMYQqU?autoplay=0&modestbranding=1&color=white")
    setModalOpen(true)
  }

  const closeModalHandler = () => {
    setModalOpen(false)
    setVideoUrl("")
  }


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
      </Helmet>
      <NavBar black />
      <YouTubeModal
        youtubeURL={videoUrl}
        modalOpen={modalOpen}
        closeModalHandler={closeModalHandler}
      />
      <BusinessSignUp openModalHandler={openModalHandler1} />
      <Destinations />
      <TeamBuilding />
      <PersonalUse />
      <JunketFeatures />
      <NewFeatures />
      <HowCreate openModalHandler={openModalHandler2}/>
      <PricingSection />
      {/* <PricingContent /> */}
      {/* <RevenueSplit /> */}
      <Resources />
      <Footer />
    </React.Fragment>
  )
}

export default Business
