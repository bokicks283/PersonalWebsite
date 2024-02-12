// import reactLogo from "../../logo.svg"
import "../css/PersonalPortfolio.css";
// import NavBar from './NavBar';
import TypedText from "./TypedTextIntro";
import ParticleBackground from "./ParticleBackground";


function PersonalPortfolio(props) {
  return (
    <div className="App">
        <ParticleBackground/>
        <header className="App-header">
          <TypedText name="Ronald Bocchichio"></TypedText>
        </header>
    </div>
  );
}

export default PersonalPortfolio;
