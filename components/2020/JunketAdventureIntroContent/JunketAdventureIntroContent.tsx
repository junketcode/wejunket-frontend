import React from "react"
import "./JunketAdventureIntroContent.scss"
import Link from "next/link"
const TermsConditionsContent = () => {
  return (
    <section id="jkADVIntro">
      <div id="jkAdv">
        <div className="adv-header">
          <h1 className="adv-header__text">Junket <strong>Adventure</strong></h1>
          <p className="adv-header__description">
            Junket adventures place users in a <strong>narrative</strong> that requires them to <strong>make choices.</strong>
          </p>
        </div>
        <div className="adv-pg1">
          <p>
            There is a single start point and end location. In between the start and end location are decision points. <strong>Decision points</strong> are places, or points of interest <strong>(POIs)</strong> that require the user to make a decision. Each decision takes the user along a different path.
          </p>
          <p>
            Decisions consist of two options:
            <br/>
            <strong>1. Multiple Choice:</strong>User selects between 2 and 4 options
          </p>
          <p>
            <strong>2. Fill in the Blank:</strong>User must type in speciﬁc numbers or letters
            <br/>
            (they must ﬁgure this out, don't give them the answer)
          </p>
        </div>
        <div className="adv-pg2">
          <h1>Adventures should:</h1>
          <p className="list-arrow">
            <img
              alt="arrow bullet list graphic"
              src={require("../../../public/img/2020/arrow-1.svg")}
            />
            Have between 18 and 30 stops
          </p>
          <p className="list-arrow">
            <img
              src={require("../../../public/img/2020/arrow-1.svg")}
              alt="arrow bullet list graphic"
            />
            Last 1hr, but no more than 90 minutes, including time to walk and listen
          </p>
          <p className="list-arrow">
            <img
              src={require("../../../public/img/2020/arrow-1.svg")}
              alt="arrow bullet list graphic"
            />
            The ﬁnal point does not involve decision making. It ends the Adventure
          </p>
          <p className="list-arrow">
            <img
              src={require("../../../public/img/2020/arrow-1.svg")}
              alt="arrow bullet list graphic"
            />
            Stops may be used more than once. Make sure there is a logical progression
          </p>
          <br/>
        </div>
        <div className="adv-pg3">
          <h1>You will want to create two items: </h1>
          <p>
            <strong>1. </strong>
            A logic map with numbers corresponding to the stops in your story. 
            Breaking it down logically and writing the stories around the logic is a great approach.
          </p>
          <br/>
          <p>
            <strong>2. </strong>
            A document with the content for each of the stops. Each stop must have an image and / or a video associated with it. 
          </p>
        </div>
        <div className="adv-pg4">
          <p>
            <h1>Decision: Fill in </h1>
            Question: why did the chicken cross the road?
            <br/>Answer: to get to the other side
            <br/>Response: Well done, Dr. Watson. Now, we’ve found a new clue. Lets head  to the chicken coup to interview his family. 
          </p>
          <p>
            <h1>Decision: Choices</h1>
            Stop 8: The Washington Monument
            <br/>Prompt: You arrive to the monument, searching for the informant's clue. You find a thumb drive taped under the bench, but you also discover a strand of hair on the tape. You keep a close eye on the shady looking man who has been following you when suddenly, you find another person who was watching you across the way run off. What do you do? 
          </p>
          <p>
            Choices: 
            <br/>1. Take the thumb drive to the office and see what's on it
            <br/>2. Take the strand of hair to forensics to see if any matches come up
            <br/>3. Confront the man in the trench coat who has been following you since the Treasury Building 
            <br/>4. Run after the person who was spying on you across the way 
          </p>
        </div>
        <div className="adv-pg5">
          <p>Connection Points:</p>
          <p>
            1: Stop 12, Smithsonian <br/>
            2: Stop 9, US Holocaust Museum <br/>
            3: Stop 10, across street from WW II Memorial <br/>
            4: Stop 19, International Spy Museum<br/>
          </p>
        </div>
        <br/>
        <br/>
      </div>
      <div id="jkAdvMap">
        <div className="adv-header">
            <h1 className="adv-header__text">Junket <strong>Adventure</strong> Map</h1>
            <p>
              The following is an example of a logic tree for decisions based adventures on Junket. Arrow lines are for demonstration purposes only, and show that a single point may be used more than once.
            </p>
        </div>
        <div>
          <img src={require("../../../public/img/2020/jk-map.png")} className="map-logic__img" alt="junket map logic tree"/>
        </div>
        <div className="em-result">
          <p className="em-result__first">
            <strong>T</strong>otal <strong>P</strong>oints: 18 <br/>
            <strong>M</strong>ost <strong>D</strong>ecisions: 16 <br/>
            <strong>L</strong>east <strong>D</strong>ecisions: <span className="c-red">6</span> <br/>
          </p>
          <p>
            <strong>SP:</strong> <span className="c-red">Shortest Path</span>
          </p>
          <p>
            <strong>MD:</strong> Most Decisions <br/>
            <strong>FN:</strong> Funnel 
          </p>
          <p>
            <strong>TP:</strong> Total Points <br/>
            <strong>LD:</strong> Least Decisions
          </p>
        </div>
        <br/>
        <br/>
      </div>
    </section>
  )
}

export default TermsConditionsContent
