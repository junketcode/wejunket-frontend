import { IDynamicPageDefinition } from "../../interfaces/page-definitions.types"


export const IndexPageDefinitionsMock: IDynamicPageDefinition = {
  id: "5de3f7d5bbf4175b6022b03d",
  pageName: "Junket for Business",
  path: "/business",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  sections: [
    // Real Sections:
    {
      id: "should_be_a_hash",
      sectionName: "business-hero",
      sectionType: "HeroSection",
      sectionTitle: "for Business",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      sectionBackground: {
        url: "/uploads/5250c7a49439490db29a2e8818b26f5f.jpg",
      },
      components: [
        {
          id: "",
          name: "Junket Business Logo",
          type: "logo",
          image: {
            url: "/uploads/3d4dfcb7f38a48788ab02788071896cf.png",
          },
          imageAltText: "Junket Business Color Logo",
          cssClasses: "lg:w-2/3 lg:-ml-12 lg:-mt-64",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "section-title",
          name: "For Business Section Title",
          displayText: "for Business",
          cssClasses:
            "text-gray-800 lg:w-2/3 text-2xl md:text-4xl tracking-widest lg:-ml-12 mt-1",
        },
        {
          id: "business-hero-paragraph",
          name: "Make it Fun",
          type: "paragraph",
          displayText: "Make it Fun.",
          cssClasses:
            "w-1/1 lg:w-2/3 lg:-ml-12 mt-2 text-2xl text-center text-gray-800",
          displayTextClasses: "",
          updatedAt: "",
          createdAt: "",
        },
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          name: "Call To Action Free Consultation",
          type: "call-to-action-button",
          cssClasses:
            "w-full lg:w-2/3 lg:-ml-12 mt-4 bg-gray-800 hover:bg-blue-700 text-white font-bold uppercase py-2 px-4 rounded-lg",
          displayText: "SCHEDULE A FREE CONSULTATION",
          // TODO: MISSING EVENT
        },
      ],
    },
    {
      id: "should_be_a_hash",
      sectionName: "business-right-half-section",
      sectionType: "BusinessRightHalfSection",
      sectionTitle: "Create Your Own Digital Adventures",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      sectionBackground: {
        url: "/uploads/6bfc17b8c13444938e8fc8460b58dd09.png",
      },
      components: [
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "section-title",
          name: "Create your own digital adventures",
          displayText: "Create your own digital adventures",
          cssClasses:
            "text-gray-800 lg:w-2/3 leading-none text-2xl md:text-4xl tracking-widest mt-1",
        },
        {
          id: "business-adventures-paragraph",
          name: "Business Adventures Paragraph",
          type: "paragraph",
          displayText:
            "Junket lets you take virtual adventures and tours from \n" +
            "your mobile device. Retrace the steps of Jack the Ripper\n" +
            "in London, pursue Al Capone in Chicago, visit the filming\n" +
            "locations of Harry Potter or Breaking Bad, or get scared\n" +
            "on a ghost tour in one of 20 cities! You can even create\n" +
            "your own experience and and share it with your friends, \n" +
            "or the world!",
          cssClasses: "w-1/1 lg:w-2/3 mt-2 text-justify text-gray-800",
          displayTextClasses: "",
          updatedAt: "",
          createdAt: "",
        },
      ],
    },
    {
      id: "should_be_a_hash",
      sectionName: "business-center-all-section",
      sectionType: "BusinessCenterAllSection",
      sectionTitle: "Schedule a Free Consultation",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      sectionBackground: {
        url: "/uploads/fd3c58c7ab4e4686886367d5960255a6.png",
      },
      components: [
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "section-title",
          name: "See Why",
          displayText:
            "See why businesses are becoming more fun and engaging with Junket",
          cssClasses:
            "text-white text-center leading-none text-2xl md:text-4xl tracking-widest",
        },
        {
          id: "see-why-paragraph",
          name: "See Why Paragraph",
          type: "paragraph",
          displayText:
            "Destinations, National Parks, museums, cities, zoos, and\n" +
            "other attractions join junket to increase visitation, generate\n" +
            "revenure, enhanche their mobile experience, and to offer\n" +
            "fun tours and games that help visitors explore their\n" +
            "destination on locations, or from across the world.",
          cssClasses:
            "w-3/4 mt-12 mb-12 ml-auto mr-auto text-justify lg:text-left text-white",
          displayTextClasses: "",
          updatedAt: "",
          createdAt: "",
        },
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          name: "Call To Action Free Consultation",
          type: "call-to-action-button",
          cssClasses:
            "w-3/4 lg:w-2/3 mt-4 m-auto bg-white  text-base hover:bg-blue-700 text-gray-800 font-bold uppercase py-2 px-4 rounded-lg",
          displayText: "SCHEDULE A FREE CONSULTATION",
          // TODO: MISSING EVENT
        },
      ],
    },
    {
      id: "should_be_a_hash",
      sectionName: "business-how-it-works-section",
      sectionType: "BusinessHowItWorks",
      sectionTitle: "How It Works",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      sectionBackground: {
        url: ""
      },
      components: [
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "how-it-works",
          name: "STEP 1",
          hex: "#ED373F",
          icon: "faMapMarkerAlt",
          displayText:
              "Create your Junket or hire us to do it!",
        },
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "how-it-works",
          name: "STEP 2",
          hex: "#5DA6DD",
          icon: "faMobileAlt",
          displayText:
              "People download the app and take junkets",
        },
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "how-it-works",
          name: "STEP 3",
          hex: "#69C494",
          icon: "faSmileBeam",
          displayText:
              "Make your people happy",
        },
      ]
    },
    {
      id: "should_be_a_hash",
      sectionName: "business-form-section",
      sectionType: "BusinessForm",
      sectionTitle: "Free Consultation",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      sectionBackground: {
        url: "/uploads/3e312149d3794021b6d7900ef9662df9.jpg",
      },
      components: [
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          type: "section-title",
          name: "Free Consultation",
          displayText:
              "Free Consultation",
          cssClasses:
              "text-white text-center leading-none text-2xl md:text-4xl tracking-widest",
        },
        {
          id: "business-consultation-paragraph",
          name: "Business Consultation Paragraph",
          type: "paragraph",
          displayText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
              "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
              "consequat.",
          cssClasses:
              "w-3/4 mt-12 mb-4 lg:mb-5 ml-auto mr-auto text-justify lg:text-left text-white",
          displayTextClasses: "",
          updatedAt: "",
          createdAt: "",
        },
      ]
    },
    // {
    //   id: "should_be_a_hash",
    //   sectionName: "junket-bubbles",
    //   sectionType: "JunketBubbles",
    //   sectionTitle: "How will you Junket",
    //   updatedAt: new Date().toISOString(),
    //   createdAt: new Date().toISOString(),
    //   sectionBackground: {
    //     url: "",
    //   },
    //   components: [
        // {
        //   id: "",
        //   createdAt: "",
        //   updatedAt: "",
        //   type: "bubble-div",
        //   name: "Business Bubble",
        //   bubbleTitle: "Junket for Business",
        //   displayText:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
        //       "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
        //       "consequat.",
        //   image: {
        //     url:
        //       "http://localhost:1337/uploads/e8d9cb0d5b674e29b79ad234b1732d9f.png",
        //   },
        //   displayTextClasses:
        //     "text-gray-800 ml-4 mr-4 lg:mr-10 text-justify leading-none text-lg md:text-lg tracking-widest",
        // },
        // {
        //   id: "",
        //   createdAt: "",
        //   updatedAt: "",
        //   type: "bubble-div",
        //   name: "Tour Bubble",
        //   bubbleTitle: "Junket for Tours",
        //   displayText:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        //       "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
        //       "ex ea commodo consequat.",
        //   image: {
        //     url:
        //       "http://localhost:1337/uploads/bec32d65705142b7b0a72e527cf9ab8a.png",
        //   },
        //   displayTextClasses:
        //     "text-gray-800 ml-4 mr-4 lg:mr-10 text-justify leading-none text-lg md:text-lg tracking-widest",
        // },
        // {
        //   id: "",
        //   createdAt: "",
        //   updatedAt: "",
        //   type: "bubble-div",
        //   name: "Personal Bubble",
        //   bubbleTitle: "Personal Junket",
        //   displayText:
        //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        //       "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
        //       "ex ea commodo consequat.",
        //   image: {
        //     url:
        //         "http://localhost:1337/uploads/bfe19b748af04ecdbb2210dc429b0880.png",
        //   },
        //   displayTextClasses:
        //       "text-gray-800 ml-4 mr-4 lg:mr-10 text-justify leading-none text-lg md:text-lg tracking-widest",
        // },
    //   ],
    // },
    // {
    //   id: "should_be_a_hash",
    //   sectionName: "digital-adventures",
    //   sectionType: "DigitalAdventures",
    //   updatedAt: new Date().toISOString(),
    //   createdAt: new Date().toISOString(),
    //   sectionBackground: {
    //     url: "img/section-bgs/section-bg-1.jpg",
    //   },
    //   sectionTitle: "Explore your World",
    //   components: [
    //     {
    //       id: "landing-counter",
    //       createdAt: "",
    //       updatedAt: "",
    //       name: "Landing Stat Counter",
    //       type: "counter",
    //       counter: [
    //         {
    //           key: "TOURS",
    //           count: 247,
    //           borderColor: "#6FC598",
    //         },
    //         {
    //           key: "ADVENTURES",
    //           count: 105,
    //           borderColor: "#EA3844",
    //         },
    //         {
    //           key: "CITIES",
    //           count: 37,
    //           borderColor: "#61A8DC",
    //         },
    //       ],
    //     },
    //     {
    //       id: "landing-counter-paragraph",
    //       name: "Landing Stat Paragraph",
    //       type: "paragraph",
    //       displayText: [
    //         "Junket lets you take virtual adventures and tours from your mobile device. Retrace the steps of Jach the Ripper " +
    //           "in London. pursue Al Capone in Chicago, visit the filming locations of Harry Potter or Breaking Bad, " +
    //           "or get scared on a ghost tour in one of 20 cities! You can even create your own experience and share it with your friends, " +
    //           "or the world!",
    //       ],
    //       displayTextClasses: "text-lg text-justify text-gray-800",
    //       updatedAt: "",
    //       createdAt: "",
    //     },
    //   ],
    // },
    // {
    //   id: "should_be_a_hash",
    //   sectionName: "junket-for-business",
    //   sectionType: "JunketForBusiness",
    //   updatedAt: new Date().toISOString(),
    //   createdAt: new Date().toISOString(),
    //   sectionBackground: {
    //     url: "img/section-bgs/section-bg-2.jpg",
    //   },
    //   sectionTitle: "for Business",
    //   components: [
    //     {
    //       id: "",
    //       name: "Logo Component Landing White",
    //       type: "logo",
    //       image: {
    //         url: "img/logo/junket_white_12_21_17.png"
    //       },
    //       imageAltText: "Junket Logo White",
    //       createdAt: "",
    //       updatedAt: ""
    //     },
    //     {
    //       id: "",
    //       createdAt: "",
    //       updatedAt: "",
    //       type: "section-title",
    //       name: "Section Title",
    //       displayText: "for Business",
    //       cssClasses: "text-center text-white text-4xl tracking-widest -mt-5",
    //     },
    //     {
    //       id: "",
    //       createdAt: "",
    //       updatedAt: "",
    //       type: "paragraph",
    //       name: "Junket For Business Description",
    //       displayText: [
    //         "Junket lets you take virtual adventures and tours from your mobile device. Retrace the steps of Jach the Ripper " +
    //         "in London. pursue Al Capone in Chicago, visit the filming locations of Harry Potter or Breaking Bad, " +
    //         "or get scared on a ghost tour in one of 20 cities! You can even create your own experience and share it with your frields, " +
    //         "or the world",
    //       ],
    //       cssClasses: "text-white text-xl lg:mt-4 text-justify",
    //     },
    //     {
    //       id: "",
    //       createdAt: "",
    //       updatedAt: "",
    //       name: "Call To Action Junket For Business",
    //       type: "call-to-action-button",
    //       displayText: "CLICK TO LEARN MORE"
    //       // TODO: MISSING EVENT
    //     },
    //   ],
    // },
    // {
    //   id: "should_be_a_hash",
    //   sectionName: "Create Your Own Adventures",
    //   sectionType: "CreateYourAdventure",
    //   updatedAt: new Date().toISOString(),
    //   createdAt: new Date().toISOString(),
    //   sectionBackground: {
    //     url: "img/section-bgs/adventure-bg.jpg",
    //   },
    //   sectionTitle: "Create Your Own Adventures",
    //   components: [
    //     {
    //       id: "",
    //       createdAt: "",
    //       updatedAt: "",
    //       type: "section-title",
    //       name: "Section Title",
    //       displayText: "Create Your Own Adventures",
    //       cssClasses: "text-white font-sans text-3xl text-center",
    //     },
    //     {
    //       id: "",
    //       createdAt: "",
    //       updatedAt: "",
    //       type: "paragraph",
    //       name: "Paragraphs for Create Your Own Adventures Section",
    //       displayText: [
    //         "Junket is the most advanced app and software on the market. We provide mobile guided tours, smartphone tours, and " +
    //         "mobile adventures for National Parks, Schools, Cities,Conventions & Visitor Bureaus, bar crawls, real estate, " +
    //         "Destination Marketing Organizations, histories attractions, zoo, and Museums. Our virtual tours are the most " +
    //         "feature rich brilliantly designed, user-friendly, and flexible.",
    //
    //         "We integrate with your social media, provide detailed analytics, and unique marketing opportunities by joining " +
    //         "our network." +
    //         "Already have an app? That’s ok, we make it better. Our software easily integrates with existing " +
    //         "mobile applications so that you can add Junket capability and features to the app you already have.",
    //       ],
    //       displayTextClasses: "text-justify text-white",
    //       displayTextWrapperClasses: "lg:w-1/2 pt-4 pb-4 lg:p-8",
    //       hasColumns: true
    //     }
    //   ],
    // },
  ],
}
