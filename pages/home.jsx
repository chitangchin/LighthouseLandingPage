import Navbar from "./Components/navbar"
import HomeComponent from "./Components/HomeComponent"
import AboutComponent from "./Components/AboutComponent"
import GettingStartedComponent from "./Components/GettingStartedComponent"
import TeamComponent from "./Components/TeamComponent"

export default function Home() {
    return <div>
        <Navbar/>
        <div id="content">
        <div id="Home"><HomeComponent/></div>
        <div id="About"><AboutComponent/></div>
        <div id="GettingStarted"><GettingStartedComponent/></div>
        <div id="Team"><TeamComponent/></div>
        </div>
        </div>
  }