import App from 'next/app'
import Head from 'next/head';
import { wrapper } from '../store/store'

class WrappedApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="junket">
        <Head>
          <link rel="shortcut icon" href={require("../public/favicon.ico")} />
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,200,300,500,600,800,700,900' rel='stylesheet'></link>
          <link href='https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900' rel='stylesheet' type='text/css'></link>
        </Head>
        <Component {...pageProps} />
      </div>
      
    ) 
  }
}

export default wrapper.withRedux(WrappedApp)
