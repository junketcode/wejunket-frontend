import React, { useEffect, useState } from "react"
import Head from "next/head"
// Base Styles for Tailwind
import "../styles/index.scss"
// Components
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { CmsService } from "../services/cms.service"
import { IDynamicPageDefinition } from "../interfaces/page-definitions.types"
import DynamicSection from "../components/DynamicSection/DynamicSection"
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner"
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

const pageKey = "5de00c22eb011f41842e8808"

const asyncServiceCall = async setPageDefinitions => {
  const result = await CmsService.getPageDefinitions(pageKey)
  // TODO: Save to cache
  const pageDef = result.data
  setPageDefinitions(pageDef)
}

const Home = () => {
  const [pageLoading, setPageLoading] = useState<Boolean>(true)
  const [
    pageDefinitions,
    setPageDefinitions,
  ] = useState<IDynamicPageDefinition | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, 1000)

    if (!pageDefinitions) {
      asyncServiceCall(setPageDefinitions)
    }
  })

  if (pageLoading) {
    return <LoadingOverlay/>
  }

  return (
    <div id="page-wrapper" className="static w-full min-h-screen">
      <Head>
        <title>Landing | Junket</title>
        <meta name="description" content="Junket: Turn Your Phone Into An Adventure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div id="page-wrapper">
        {pageDefinitions &&
          pageDefinitions.sections &&
          pageDefinitions.sections.map(sectionDef => (
            <DynamicSection key={sectionDef.sectionName} {...sectionDef} />
          ))}
        <Footer />
      </div>
    </div>
  )
}

export default Home
