import React, { useEffect, useState }  from "react"
import { Collapse } from "react-collapse"
import clsx from 'clsx'
import "./FAQContent.scss"
import Link from "next/link"
import { faQq } from "@fortawesome/free-brands-svg-icons"

const faq =[
  {
    id: "1",
    que:"What do I need to complete a Junket?",
    aws: "You will need an image, introduction text and mp3 audio (optional), and a location address for the starting point. You may add a video, but it is not required."
  },
  {
    id: "2",
    que:"For each stop in the Junket, you will need at least one photo (maximum if four), mp3 audio file (required), and address (not required for indoor locations). Video is optional.",
    aws: "Adventure Junkets must include a logic path tree to properly map out and setup."
  },
  {
    id: "3",
    que:"What are your requirements for images?",
    aws: "Images should be in landscape orientation, less than 5MB in size, and at least 1200 x 800 pixels. Only use quality images."
  },
  {
    id: "4",
    que:"What are your requirements for audio?",
    aws: "Audio files must be mp3, and under 5 minutes in length. They may not include copyrighted music."
  },
  {
    id: "5",
    que:"How do I submit a Junket for approval?",
    aws: "There is a button to submit for approval. Once submitted, it will be reviewed within 2 business days."
  },
  {
    id: "6",
    que:"Can I charge for my Junkets?",
    aws: "Yes, you can sell your Junkets. Revenue will be split between Apple/Google, Junket, and the seller depending on your plan. Payments are made once each month for junkets that have earned over $100. If a junket has not earned this amount in one month but does in the second month, the payout will be sent in the next pay period."
  },
  {
    id: "7",
    que:"How is payment handled, and when do I get paid?",
    aws: "To align with Apple's policy of payouts, payment for purchases made on both Android, iOS, and other third party systems will be made five days after Apple's 30 days following the end of each monthly period. For example, a Junket will be paid for revenue earned from tokens redeemed in September on November 4. Apple distributes funds for September on October 30, and Junket redistributes those funds on November 4. Payouts require a minimum threshold of $100. Payout for the total amount will be made in the pay period once the threshold has been met."
  },
  {
    id: "8",
    que:"How is payment calculated?",
    aws: "Payment is calculated by the token value used to access your Junket. You may set your Junket at a price of $6, which would equal six tokens, but the discount for purchasing tokens in bulk subtracts from the total. For example, if a user purchases a bundle of $100 tokens, they are given a 20% discount. If they use one of those tokens to access your Junket, the total amount of revenue from which the commission is drawn from will be reduced by 20%, as the real revenue was 20% lower."
  },
  {
    id: "9",
    que:"Can more than one people take a Junket?",
    aws: "While we encourage each person to get a junket on their phone, it is common for a group to share a junket from one device."
  },
  {
    id: "10",
    que:"What is an Adventure?",
    aws: "An adventure is an interactive, decision based game that places the user in a narrative storyline. There is a single defined start and end point. During an adventure, the user makes decisions based on the information (text, audio, video, images) and clues given to them. Decisions may be two to four multiple choice questions, each of which lead them to a different location; or a fIll in the blank entry (for example, enter the codeword given by the hotel concierge, or write the numbers etched into the brick on the wall). People may team up to solve these quests, or can compete with their friends. Points are tallied for the fastest to complete the junket and placed on a global leaderboard, and a trophy is awarded for those who finish it the fastest! Adventures are typically 60 to 90 minutes long"
  },
  {
    id: "11",
    que:"What are trophies and prizes?",
    aws: "Trophies are awarded when a user physically visits 80% or more of locations on a tour, or completes an adventure fast enough. Trophies appear in the user profile. When a user earns a trophy, they may redeem it for a specific prize, at a certain place and time, and they have only a limited time in which they can redeem their prize. Prizes could be physical items acquired at a local business, information, coupons, or an online promo/discount code.	The person who creates the junket determines all of these details, including what their trophy appears as."
  },
  {
    id: "12",
    que:"What is a route?",
    aws: "Routes are displayed for Junket tours to guide users along a suggested path from one point to another. Creators of a junket can create and edit their routes.	However, you do not need to create a route. Users will be given walking directions automatically in the app for locations that are within .2 mile. Locations that are longer will be given driving directions."
  },
  {
    id: "13",
    que:"How many points can a single Junket have?",
    aws: "As many as you want based on your plan"
  },
  {
    id: "14",
    que:"Do junkets support video?	",
    aws: "Yes, we encourage video. Video is currently embedded by youtube only, so make sure the videos you want to use are on YouTube."
  },
  {
    id: "15",
    que:"Can I provide links back to websites, or phone numbers within a Junket?",
    aws: "Yes"
  },
  {
    id: "16",
    que:"How much should I charge for a Junket?	",
    aws: "Depends, it's based on the value of the experience, and your choice. We think tours and adventures with great content should go for $10"
  },
  {
    id: "17",
    que:"What are the advantages of Junket?",
    aws: "Junket lets people enjoy experiences whenever they want, with whomever they want. It provides both convenience and quality experience. Users do not have to worry about disruptive members in their group, a bad tour guide (or one who doesn’t arrive), restrictive start times, bad weather, or a host of other factors. For businesses, Junket offers a way to reach new customer segments, appeal to more people by remaining open 24/7, does not require staff, and allows them to easily control their experiences. Junket delivers an immersive digital platform that projects their content across mobile, apps, facebook, and the web."
  },
  {
    id: "18",
    que:"After a user purchases a Junket, how long do they have to use it?",
    aws: "Junkets expire after one week of purchase. Adventures expire once they have been completed."
  },
  {
    id: "19",
    que:"Can someone take a Junket or an adventure even if they are not physically present?",
    aws: "Yes. Junket may be enjoyed by anyone, regardless of where they are physically located. While we recommend people enjoy the experience on location, someone may also experience it from their living room."
  },
  {
    id: "20",
    que:"Can I use this in an area with no service or wifi?",
    aws: "Yes, as long as you download it beforehand. However, certain features like GPS and geolocation will not work, but a user can still access content after downloading it."
  },
  {
    id: "21",
    que:"What does it mean to subscribe to Junket?",
    aws: "Subscribers of Junket may access all content in Junket as long as they remain a subscriber."
  },

  {
    id: "22",
    que: "Can I see the number of downloads in sales and other analytics for my Junket?",
    aws: "Yes. Business for Junket allows businesses to see how many people have used the Junket, which locations are most popular, which devices are used, and other data. We do not collect user information, as that violates our users privacy policy."
  },
  {
    id: "23",
    que: "How long does it take to download a Junket?",
    aws: "The time required depends on the amount of content and size of a Junket, and your connection speed."
  },
  {
    id: "24",
    que: "Do I need to create an account to use Junket?",
    aws: "Yes. Every user of Junket must create an account. However, we make this very easy by allowing for quick and easy login with your Facebook page!"
  },
  {
    id: "25",
    que: "Are there Junkets I can take that are free?",
    aws: "Yes. Not every Junket requires a purchase or subscription."
  },
  {
    id: "26",
    que: "How does Junket work?	",
    aws: "Junket pairs your location with a predetermined GPS trigger of each stop or point of interest along a Junket. Once you have started a Junket, the app tracks your location and delivers the audio content based on your location, totally hands free. If the user would like to see images, the route or walking path, a video, or read the text, they would look at their phone."
  },
  {
    id: "27",
    que: "Are Junket’s available of indoor locations?",
    aws: "Yes. The first Junket was actually in a museum. However, we do not currently support indoor positioning or GPS."
  },
  {
    id: "28",
    que: "Are all junkets walking?",
    aws: "They don’t have to be. Junket can also support driving and other modes of travel."
  },
  {
    id: "29",
    que: "Do Junkets give directions from point to point?",
    aws: "Junkets may provide a recommended visual path for you to take, but they do not currently provide turn by turn directions."
  },
  {
    id: "30",
    que: "Can Junket be used internationally?",
    aws: "Yes."
  },
  {
    id: "31",
    que: "How do you handle liability for the Junkets?",
    aws: "By using Junket, users agree to our terms of use, and indemnify Junket and its partners, affiliates, clients, and other related parties. Users take Junkets at their own risk, and Junket and parties are not responsible for what happens while they are on a Junket."
  },
  {
    id: "32",
    que: "Once the junket is started, can in be paused and finished later?",
    aws: "Yes. Once a Junket is purchased, a user will have access for seven days before requiring an additional purchase."
  },
  {
    id: "33",
    que: "Can I upgrade my account?",
    aws: "Yes, you can add Junkets and upgrade your plan at any time."
  },
  {
    id: "34",
    que: "Can I make a junket and try it out before submitting it for review and having it go live?",
    aws: "Yes."
  },
  {
    id: "35",
    que: "Does my junket have to appear on the Junket app?",
    aws: "Yes, all Junkets appear in the app, which means anyone from around the world can enjoy it."
  },
  {
    id: "36",
    que: "Can my Junket be available from specific websites?",
    aws: "Business level and higher plans allow you to embed your Junket in a website."
  },
  {
    id: "37",
    que: "Is the Junket app free?",
    aws: "Yes, there is no cost to download Junket."
  },
  {
    id: "38",
    que: "How do you control how many people use a Junket?",
    aws: "We do not."
  },
  {
    id: "39",
    que: "Is there an optimum number of locations?",
    aws: "There is no optimal number. It depends on your experience, quality content, and the overall value delivered for the user."
  },
  {
    id: "40",
    que: "Does a starting location matter, or can people pick and choose where to go in any order?",
    aws: "Junkets can be very open ended, and give people the freedom to pick where they want to go, when, and how"
  },
  {
    id: "41",
    que: "Common troubleshooting",
    aws: "If you are having trouble downloading your Junket, please try these steps: <br/>If you download has paused, try exiting out of the screen and going back. Try to download again.<br/> If there still does not work, force close the app, check your connection to make sure you are connected and not picking up a faulty public wifi, and reopen your app.<br/> We also recommend closing other apps that you were not using on your phone.<br/> If you still have issues, or need to report a bug, please email contact@wejunket.com"
  },
  {
    id: "42",
    que: "Does junket support international currency?",
    aws: "Yes."
  },
  {
    id: "43",
    que: "What is background Audio?",
    aws: "Background audio plays throughout the app, including between locations."
  },
  {
    id: "44",
    que: "Can I view and test my Junket before submitting it?",
    aws: "Yes! Log in to the app with the same username and password that you used to create your Junket."
  },
  {
    id: "45",
    que: "Does the App Give Walking Directions?		",
    aws: "If there is no route for your experience, both iOS and Android apps will provide walking directions from one stop to the next, in order."
  },

]



const FAQContent = () => {

  const [activeIndex, setActiveIndex] = useState(null)
  const [faqArr, setFaqArr] = useState(faq)

  const toggleClass = (index, e) => {
      if(activeIndex === index)
        setActiveIndex(null)
      else
        setActiveIndex(index)
  }


  const onChange = (e) => {
    let searchKwd = e.target.value;
    let faqResult = [];
    faq.map((item, index)=>{
      if(item.que.toLowerCase().includes(searchKwd))
        faqResult.push(faq[index]);
    })

    console.log(faqResult);
    setFaqArr(faqResult);
  }

  return (
    <section id="faq">
      <div className="text-center">
        <span className="faq-title__text">FAQ:</span>
      </div>
      <div className={clsx("faq-search-bar")}> 
        <input type="text" name="" onChange={e=>onChange(e)} placeholder="Search..." id=""/>
      </div>

      <div className="faq-main">
        {
          faqArr.map((post, index) => {
            return(
              <div className="faq-item">
                <div className={clsx("faq-question")} onClick={e =>toggleClass(index, e)}>
                  <p>{index+1}. {post.que}</p>
                  <div className="rotate90">
                    <svg
                      className={clsx("icon", { "icon--expanded": activeIndex === index })}
                      viewBox="6 0 12 24"
                    >
                      <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                    </svg>
                  </div>
                </div>
                <div className={clsx("faq-answer-section")} >
                  <Collapse isOpened={activeIndex === index}>
                    <div
                      className={clsx("alert alert-info msg faq-answer", {
                        show: activeIndex === index,
                        hide: activeIndex !== index
                      })}

                      
                    >
                      <p dangerouslySetInnerHTML={{__html: post.aws}}></p>
                    </div>
                  </Collapse>
                </div>
              </div>
            )
          })
        }
      </div>
      
      <div className="image-section">
        <div className="image-section_jk-list">
          <img src={require("../../../public/img/2020/junket-list.png")} alt="list of junkets"></img>
        </div>
        <div className="image-section__phone">
          <img src={require("../../../public/img/2020/faq-mobile1.png")} alt="example of a junket"></img>
        </div>
        <div className="image-section__phone">
          <img src={require("../../../public/img/2020/faq-mobile1.png")} alt="example of a junket"></img>
        </div>
      </div>
      <div className="faq-title">
        <div className="overlay-img">
          <img src={require("../../../public/img/2020/junket-map.png")} alt="example of a junket map"></img>
        </div>
      </div>
    </section>
  )
}

export default FAQContent
