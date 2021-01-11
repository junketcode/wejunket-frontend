import * as React from "react"
import "./FindJunkets.scss"

const FindJunkets = () => {
    return (
        <div className="find-junkets-container">
            <h2 className="white-title">Find all the Junkets on the App Marketplace</h2>
            <p className="main-text">Tremble at over 25 frightening ghost tours, retrace the steps of Jack the Ripper in London (or track him down as a member of Scotland Yard!), visit filming locations of your favorite movies and TV shows, enjoy a savory food tour, or a bar crawl made by locals.</p>
            <div className="find-bottom">
                <p className="detail-text">See all the Junkets available now, more are coming online every day.</p>
                <img src={require("../../../public/img/v2/icons/arrow-white.svg")} alt="white arrow" className="white-arrow"/>
            </div>
        </div>
    )
}

export default FindJunkets