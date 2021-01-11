import * as React from "react"
import BusinessPhone from "../JunketWork/JunketExpImg/BusinessPhone"
import "./HowCreate.scss"


const HowCreate = ({openModalHandler}) => {

  const yesHandler = () => {
        openModalHandler()
  }

  return (
    <div className="how-create container">
      <h3 className="grey-title">How to Create Your First Junket</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="how-create-container">
        <div className="create-list">
            <ol>
                <li key="1" className="create-item">
                    <p className="blue-text">Register for a Junket account, choose a plan.</p>
                </li>
                <li key="2" className="create-item">
                    <p className="blue-text">Pick a start and endpoint in the Junket CMS.</p>
                    <ul className="sub-list">
                        <li key="2a">
                            <p className="sub-text">Choose around 18 - 30 stops in between.</p>
                        </li>
                        <li key="2b">
                            <p className="sub-text">These can be sequential or can be an Adventure, see our <a href="/junket-adventure-intro"><span>guide to creating an adventure</span></a> for a step by step guide to creating decision questions or fill in questions.</p>   
                        </li>
                    </ul>
                </li>
                <li key="3" className="create-item">
                    <p className="blue-text">Each stop needs an image, video, or audio  associated with it.</p>
                </li>
                <li key="4" className="create-item">
                    <p className="blue-text">Map your visual route out in our CMS system, adding stops on the map and completing each stop information,draw and revise a navigation route.</p>
                    <ul className="sub-list">
                        <li key="4a">
                            <p className="sub-text">The route should last around 1hr, but no more than 90 minutes, including time to walk and listen.</p>   
                        </li>
                    </ul>
                </li>
                <li key="5" className="create-item">
                    <p className="blue-text">Add an introduction and a cover image for your Junket.</p>
                </li>
                <li key="6" className="create-item">
                    <p className="blue-text">Submit and publish once approved.</p>
                </li>
                <li key="7" className="create-item">
                    <p className="blue-text">Set your pricing (<span>free is OK</span>) get your link.</p>
                </li>
                <li key="8" className="create-item">
                    <p className="blue-text">Promote your Junket and track users, popular stops and revenue.</p>
                </li>
            </ol>
        </div>
        <div>
          <div className="phone-play">
            <button onClick={yesHandler} id="Btn2" className="hover-button"><img src={require("../../../public/img/v2/red-play-btn.svg")} alt="red play button"/></button>
            <BusinessPhone imgName="how-create-phone"/>
          </div>  
          <div className="side-notes">
              <img src={require("../../../public/img/v2/icons/warning-icon.svg")} alt="" className="warning-icon"/>
              <p className="note1">We suggest using the best quality audio, video and images you can, we want Junket experiences to be as good as possible.</p>
              <p className="note2">We have a <a href="/faq"><span>FAQ</span></a> with more answers.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default HowCreate