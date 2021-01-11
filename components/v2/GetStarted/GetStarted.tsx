import * as React from "react"
import PhoneSlider from './PhoneSlider'
import AppStoreGroup from '../AppStoreGroup/AppStoreGroup'

import "./GetStarted.scss"
import App from "next/app"

const GetStarted = () => {
    return (
        <div className="get-started-container">
            <div className="started-heading">
                <h3 className="blue-subtitle">JUNKET IS EASY AND FUN TO USE</h3>
                <h2 className="grey-title">Getting Started with Junket</h2>
                <img src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wave graphic" className="sufering-started"/>
            </div>
            <div className="note-section">
                <div className="note-text">
                    <div className="step-img">
                        <img src={require("../../../public/img/v2/icons/step1.svg")} alt="step one icon" className="step-icon"/>
                    </div>
                    <div className="step-content">
                        <h2 className="step-blue">Get the app and sign in!</h2>
                        <p className="step-text">Creators from around the world use the Junket platform to design and build virtual augmented experiences for you to enjoy on the Junket app, whether you're on location, or at home. After you download the app, Sign in with Facebook, or create an account by email.</p>
                    </div>
                </div>
                <div className="note-phone">
                    <AppStoreGroup />
                </div>
            </div>
            <div className="note-section reverse">
                <div className="note-phone">
                    <PhoneSlider />
                    <img className="phone-bg" src={require("../../../public/img/pages/whatisjunk/phonebg.png")} alt="phone screen demo" />
                </div>
                <div className="note-text">
                    <div className="step-img">
                        <img src={require("../../../public/img/v2/icons/step2.svg")} alt="step two icon" className="step-icon"/>
                    </div>
                    <div className="step-content">
                        <h2 className="step-blue">Take the tutorial or find a Junket!</h2>
                        <h4 className="step-subtitle">The optional tutorial will walk you through you how to use the app - it's fast and easy.</h4>
                        <p className="step-text">View a list of Junkets closest to you, search or browse Junkets around the world, or <span>take an adventure!</span> Some Junkets are free, and others require a purchase.</p>
                        <ol className="blue-list">
                            <li className="blue-list-item">Press ‘<span className="bolded">Begin Junket</span>’ to start, to take a preview before purchasing, or to redeem a code if already purchased</li>
                            <li className="blue-list-item">Buy tokens or redeem gifted tokens to access paid Junkets. Once you buy a Junket, you have seven days to take it. Adventures will expire after they are completed.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="note-section">
                <div className="note-text">
                    <div className="step-img">
                        <img src={require("../../../public/img/v2/icons/step3.svg")} alt="step three icon" className="step-icon"/>
                    </div>
                    <div className="step-content">
                        <h2 className="step-blue">Begin your fun!</h2>
                        <p className="step-text">The app will guide you to each location along the tour, providing directions. Once you arrive at a location, the narration will begin.</p>
                        <p className="step-text">You can keep the device in your pocket, or take it out to navigate through text, audio, photos, and video. You can also view a list of stops, or search for them by name.</p>
                    </div>
                </div>
                <div className="note-phone">
                    <img src={require("../../../public/img/pages/whatisjunk/gettingstart.png")} alt="phone screen demo" className="started-phone"/>
                </div>
            </div>
        </div>
    )
}

export default GetStarted