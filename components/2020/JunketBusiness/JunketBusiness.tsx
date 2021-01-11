import React, {useState} from "react"
import "./JunketBusiness.scss"
import Link from "next/link"
import ReactPlayer from "react-player";

const JunketBusiness = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayToggle = () => {
    setPlaying(!playing)
  }

  return (
    <section id="junket-business" className="junketBusinessRoot">
      <div className="junketBusinessOverlay">
        <div className="junketBusinessContent">
          <div className="junketBusinessLeft">
            <div className="junketBusinessLeftTop">
              <img
                src={require("../../../public/img/logo/junket_color_12_21_17.png")}
                className="junketBusinessLogo"
                alt="Junket Business Logo"
              />
              <h1 className="forBusinessHeader">For Business</h1>
              <Link href={"/business"}>
                <button className="st0" name="Learn More!"> Learn More!</button>
              </Link>
            </div>
            <div className="junketBusinessLeftBottom">
              <h1 className="leftBottomHeader">Create Your Own Adventure</h1>
              <p className="leftBottomText">
                Junket is the most advanced app and software on the market. We
                provide mobile guided tours, smartphone tours, and mobile
                adventures for National Parks, Schools, Cities, Convention &
                Visitor Bureaus, bar crawls, real estate, Destination Marketing
                Organizations, historic attractions, Zoos, and Museums. Our
                virtual tours are the most feature rich, brilliantly designed,
                user-friendly, and flexible. We integrate with your social
                media, provide detailed analytics, and unique marketing
                opportunities by joining our network.
              </p>
            </div>
          </div>
          <div className="junketBusinessRight" onClick={handlePlayToggle}>
            <ReactPlayer
              url="https://youtu.be/PyoklUqTndg"
              playing={playing}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JunketBusiness
