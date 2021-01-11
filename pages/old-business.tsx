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

const pageKey = "5de3f7d5bbf4175b6022b03d"

const asyncServiceCall = async setPageDefinitions => {
    const result = await CmsService.getPageDefinitions(pageKey)
    // TODO: Save to cache
    const pageDef = result.data
    setPageDefinitions(pageDef)
}

const OldBusiness = () => {
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
        return (
            <div
                id="loading-overlay"
                className="fixed flex justify-center w-full h-screen bg-blue-800 text-white"
            >
                Loading...
            </div>
        )
    }

    return (
        <div id="page-wrapper" className="static max-w-full min-h-screen">
            <Head>
                <title>Business | Junket</title>
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

export default OldBusiness


