import * as React from "react"
import "./LinerWrapper.scss"
import Head from 'next/head';

interface LinerWrapperProps{
  Component?: Object,
  pageProps?: Object
}

const  LinerWrapper = (props) => {
    
    return (
      <div className="liner-container container">
        {props.children}
      </div>
    ) 
  
}

export default LinerWrapper
