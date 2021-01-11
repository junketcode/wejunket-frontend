import Head from "next/head"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import React from "react"

const TemplateLayout = ({ title, children }: any) => {
  return (
    <div id="page-wrapper" className="static w-full min-h-screen">
      <Head>
        <title>{title} | Junket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div
        id="content-wrapper"
        className="flex flex-col px-2 -mt-20 pt-20 min-h-screen"
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateLayout
