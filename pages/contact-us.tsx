import React from "react"
import Footer from "../components/Footer/Footer"
import SchedulePage from "../components/2020/SchedulePage/SchedulePage"
import NavBar from "../components/v2/NavBar/NavBar"
import Head from "next/head";

const ContactUs = () => {
  return (
    <React.Fragment>
        <Head>
            <title>Contact Us | Junket</title>
        </Head>
      <NavBar black />
      <SchedulePage />
      <Footer />
    </React.Fragment>
  )
}

export default ContactUs
