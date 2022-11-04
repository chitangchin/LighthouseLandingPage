export default function Navbar() {

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("About");
    element.scrollIntoView({behavior: 'smooth'});
  }

  const scrollToGettingStarted = () => {
    const element = document.getElementById("GettingStarted");
    element.scrollIntoView({behavior: 'smooth'});
  }

  const scrollToTeam = () => {
    const element = document.getElementById("Team");
    element.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div>
      {/* Navigation */}
      <div className="navigation">

        {/* On Left side of PAGE */}
        <div id="leftsideNav">
          <a id="HomeButton" onClick={scrollToHome}> Home </a>
          <a id="AboutButton" onClick={scrollToAbout}> About </a>
          <a id="GettingStartedButton" onClick={scrollToGettingStarted}> Getting Started </a>
          <a id="TeamButton" onClick={scrollToTeam}> Team </a>
        </div>

        {/* On right side of PAGE */}
        <div id="rightsideNav">
          <a id="GithubButton" onClick={()=> {window.open("https://github.com/oslabs-beta/Lighthouse", '_blank')}}> Download</a>
        </div>

      </div>

    </div>)
}