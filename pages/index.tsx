import React, { useState } from "react"
import NavBar from "../components/v2/NavBar/NavBar"
import { Helmet } from "react-helmet"
import loadable from "@loadable/component"
// import NewsletterModal from "../components/2020/NewsletterModal/NewsletterModal"
import Banner from "../components/v2/Banner/Banner"
import LinerWrapper from "../components/LinerWrapper/LinerWrapper"
// import PlayButton from "../components/v2/PlayButton/PlayButton"
import Guide from "../components/v2/Guide/Guide"
import DownloadApp from "../components/v2/DownloadApp/DownloadApp"
import HowWork from "../components/v2/HowWork/HowWork"
import UserFeedback from "../components/v2/UserFeedback/UserFeedback"
import "../styles/index.scss"
import VirtualExp from "../components/v2/VirtualExp/VirtualExp"
import AdventurePocket from "../components/v2/AdventurePocket/AdventurePocket"
import JunketWork from "../components/v2/JunketWork/JunketWork"
import HelpRefund from "../components/v2/HelpRefund/HelpRefund"
import TakeAndMakeJunket from "../components/v2/TakeAndMakeJunket/TakeAndMakeJunket"
import JunketFullMap from '../components/TourListing/JunketsMap/JunketsFullMap'
// import NewsletterBottomPopUp from "../components/2020/NewsletterBottomPopUp/NewsletterBottomPopUp"
import Footer from "../components/Footer/Footer"

const YouTubeModal = loadable(() =>
  import("../components/v2/YouTubeModal/YouTubeModal")
)

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  //TODO: Retrieve free junkets and display junkets near user

  const [videoUrl, setVideoUrl] = useState("")

  const openModalHandler = () => {
    setVideoUrl("https://www.youtube.com/embed/pi-Uj6qB33I?autoplay=0&modestbranding=1&color=white")
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
        <title>Junket</title>
        <meta name="description" content="Explore Your World!" />
      </Helmet>
      <YouTubeModal
        youtubeURL={videoUrl}
        modalOpen={modalOpen}
        closeModalHandler={closeModalHandler}
      />
      <NavBar black />
      <Banner openModalHandler={openModalHandler} />
      <LinerWrapper>
        {/* <PlayButton /> */}
        <Guide />
        <JunketFullMap />
        <DownloadApp />
        <HowWork />
        <VirtualExp />
        <UserFeedback />
        <AdventurePocket />
        <JunketWork />
        <HelpRefund />
        <TakeAndMakeJunket />
      </LinerWrapper>
      {/* <NewsletterBottomPopUp openModalHandler={openModalHandler} /> */}
      <Footer />

    </React.Fragment>
  )
}

export default Index
