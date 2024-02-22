// import reactLogo from "../../logo.svg"
import "../css/PersonalPortfolio.css";
// import NavBar from './NavBar';
import TypedText from "./TypedTextIntro";
import ParticleBackground from "./ParticleBackground";


function PersonalPortfolio(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ParticleBackground/>
        <TypedText name="Ronald Bocchichio"></TypedText>
      </header>
      <div className="page-content">
        <p>test para</p>
      </div>
    </div>
  );
}

export default PersonalPortfolio;
