import * as React from "react"
import "./VirtualExp.scss"

const VirtualExp = ({}) => {
  return (
    <div className="virtual-exp container">
      <p className="blue-text">THERE’S MORE TO A TOUR</p>
      <h3 className="grey-title">Virtual Augmented Experiences</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <p className="virtual-explain-text">Experience a destination in a different way to a guided tour. Peel back the layers of a place on your terms. See the same amazing tour, with added detail and special bonuses. </p>
      <div className="virtual-content">
        <img className="img-polygon" src={require("../../../public/img/v2/red-polygon.svg")} alt="red polygon"/> 
        <img className="img-tower-desktop" src={require("../../../public/img/v2/washington-tower-desktop.png")} alt="washington tower"/>
        <div className="item-list">
          <div className="exp-item">
            <img src={require("../../../public/img/v2/icons/world.svg")} alt="globe icon"/>
            <p className="blue-text">Over 100 experiences in more than 50 cities in eight countries.</p>
          </div>
          <div className="exp-item">
            <img src={require("../../../public/img/v2/icons/cup.svg")} alt="trophy"/>
            <p className="blue-text">Visit more than 80% of locations in a Junket to earn trophies.</p>
          </div>
          <div className="exp-item">
            <img src={require("../../../public/img/v2/icons/recycle.svg")} alt="recycle"/>
            <p className="blue-text">Revisit a favorite destination anytime within 7 days to see the virtual highlights again, on your mobile device. </p>
          </div>
        </div>
        
        <img className="img-tower-mobile" src={require("../../../public/img/v2/washington-tower-mobile.png")} alt="washington tower on mobile frame"/>
      </div>
    </div>
  )
}

export default VirtualExp 
