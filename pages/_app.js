import '../styles/globals.css'
import "../styles/Navbar.css"
import "../styles/Home.css"
import "../styles/About.css"
import "../styles/GettingStarted.css"
import "../styles/Team.css"
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return(
    <>
    <Head>
    <link rel="shortcut icon" href='/favicon.ico'/>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
