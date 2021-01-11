import * as React from "react"
import {IHowItWorksStepComponent} from "../../../../interfaces/page-definitions.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMapMarkerAlt, faMobileAlt, faSmileBeam} from "@fortawesome/free-solid-svg-icons/";

const HowItWorksStep = (props: IHowItWorksStepComponent) => {
    const {name, displayText, hex, icon, image} = props

    let faIcon = undefined

    switch(icon) {
        case "faMapMarkerAlt":
            faIcon = faMapMarkerAlt;
            break;
        case "faMobileAlt":
            faIcon = faMobileAlt;
            break;
        case "faSmileBeam":
            faIcon = faSmileBeam;
            break;
        default:
            faIcon = null
    }
    return (
        <div className="w-2/3 lg:w-1/3 flex flex-col justify-center items-center m-auto pb-8">
            <h1 style={{color: `${hex}`}} className="text-4xl">{name}</h1>
            <p className="text-xl pt-8 pb-8">{displayText}</p>
            <FontAwesomeIcon icon={faIcon} style={{color: `${hex}`}} className="text-6xl lg:text-6xl"/>
        </div>
    )
}

export default HowItWorksStep
