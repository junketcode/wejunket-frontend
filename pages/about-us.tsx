import React, { useState } from "react"
import {Helmet} from "react-helmet"
import loadable from '@loadable/component'
import NavBar from "../components/v2/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import LinerWrapper from '../components/LinerWrapper/LinerWrapper'
import Banner from '../components/AboutUs/Banner'
import JunketDescription from '../components/v2/JunketWork/JunketDescription'
import UserChoose from '../components/AboutUs/UserChoose/UserChoose'
import OurHistory from '../components/AboutUs/OurHistory/OurHistory'
import WhatJunkCanDo from '../components/AboutUs/WhatJunkCanDo/WhatJunkCanDo'
import AdventureGuide from '../components/AboutUs/AdventureGuide/AdventureGuide'
import LoginAccount from '../components/AboutUs/LoginAccount/LoginAccount'

const YouTubeModal = loadable(() =>
  import("../components/v2/YouTubeModal/YouTubeModal")
)


const AboutUs = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const [videoUrl, setVideoUrl] = useState("")

  const openModalHandler = (videoSrc) => {
    setVideoUrl(videoSrc)
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
        <title>About Us | Junket</title>
        <meta
          name="description"
          content="Find out who we are!"
        />
      </Helmet>
      <YouTubeModal
        youtubeURL={videoUrl}
        modalOpen={modalOpen}
        closeModalHandler={closeModalHandler}
      />
      <NavBar black />
      <Banner />
      <LinerWrapper>
        <JunketDescription />
        <UserChoose />
        <OurHistory />
        <WhatJunkCanDo />
        <AdventureGuide openVideo={openModalHandler} />
        <LoginAccount />
      </LinerWrapper>
      <Footer />
    </React.Fragment>
  )
}

export default AboutUs
