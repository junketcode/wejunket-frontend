import React, { useState } from "react"
import HeroSection from "../components/2020/HeroSection/HeroSection"
import NavBar from "../components/NavBar/NavBar"
import { Helmet } from "react-helmet"
import loadable from "@loadable/component"

const VideoSection = loadable(() =>
  import("../components/2020/VideoSection/VideoSection")
)

const JunketBusiness = loadable(() =>
  import("../components/2020/JunketBusiness/JunketBusiness")
)

const Footer = loadable(() => import("../components/2020/Footer/Footer"))

const NewsletterModal = loadable(() =>
  import("../components/2020/NewsletterModal/NewsletterModal")
)

const NewsletterBottomPopUp = loadable(() =>
  import("../components/2020/NewsletterBottomPopUp/NewsletterBottomPopUp")
)

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  //TODO: Retrieve free junkets and display junkets near user

  const openModalHandler = () => {
    setModalOpen(true)
  }

  const closeModalHandler = () => {
    setModalOpen(false)
  }

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Junket</title>
        <meta name="description" content="Explore Your World!" />
      </Helmet>
      <NewsletterModal
        modalOpen={modalOpen}
        closeModalHandler={closeModalHandler}
      />
      <NavBar black />
      <HeroSection />
      <VideoSection />
      <JunketBusiness />
      <NewsletterBottomPopUp openModalHandler={openModalHandler} />
      <Footer /> 
    </React.Fragment>
  )
}

export default Index
