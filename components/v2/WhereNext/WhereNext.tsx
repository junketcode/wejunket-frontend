import * as React from "react"
import "./WhereNext.scss"


const WhereNext = () => {
    return(
        <div className="where-next-container">
            <div className="where-heading">
                <h2 className="grey-title">Where do you want to go next?</h2>
                <img src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path" className="other-sufering"/>
            </div>
            <div className="where-content">
                <p className="where-text">We hope you'll invite your friends and family to join you on a Junket. Whether it's to solve a mystery together or to compete in teams on an adventure, or to experience virtually augmented tours at home or when traveling.</p>
                <p className="where-text">The Junket creative platform is also free and available for anyone to create their own Junket. We hope you'll join us and create a great adventure to share on the Junket platform.</p>
                <div className="see-junkets">
                    <p className="see-junket-text">See All Available Junkets</p>
                    <a href="/junkets" className="see-junkets-link"><img src={require("../../../public/img/v2/icons/arrow-btn.svg")} alt="red arrow" className="see-junkets-button"/></a>
                </div>
            </div>
        </div>
    )
}

export default WhereNext