import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"

const BusinessHowItWorks = ({
    sectionName,
    sectionTitle,
    components,
}: IDynamicSectionDefinition) => {

    return (
        <div>
            <section id={sectionName} style={{backgroundColor: "#EFEFEF"}}>
                <h1 className="text-center text-2xl pt-10 pb-5">{sectionTitle}</h1>
                <div className="pt-5 pb-10 flex flex-col lg:flex-row">
                    {components &&
                    components.map(component => (
                        <DynamicComponent key={component.name} {...(component as any)} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default BusinessHowItWorks
