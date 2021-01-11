import * as React from "react"
import "./OtherThings.scss"

const OtherThings = () => {
    return(
        <div className="other-things-container">
            <div className="other-heading">
                <h2 className="grey-title">Other things you can do with Junket</h2>
                <img src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path" className="other-sufering"/>
            </div>
            <div className="star-container">
                <div className="star-feature">
                    <div>
                        <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
                        <p className="red-text">Share and invite your friends</p>
                    </div>
                    <div>
                        <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
                        <p className="red-text">Take Junkets alone, or with friends</p>
                    </div>
                    <div>
                        <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
                        <p className="red-text">Review and rate your Junket</p>
                    </div>
                </div>

                <div className="star-feature">
                    <div>
                        <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
                        <p className="red-text">Sync your phones to experience Junkets together</p>
                    </div>
                    <div>
                        <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
                        <p className="red-text">Junkets can be available in any language</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherThings