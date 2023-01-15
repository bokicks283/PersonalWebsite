// import reactLogo from "../../logo.svg"
import "../css/PersonalPortfolio.css";
import AnimationBackground from './AnimatedBackground.js';
// import NavBar from './NavBar';
import TypedText from "./TypedTextIntro";

function PersonalPortfolio(props) {
  return (
    <div className="App">
      {/* <NavBar text="this is my navbar bitttttch" reactLogo={reactLogo}></NavBar> */}
        <header className="App-header">
          <TypedText name="Ronald Bocchichio"></TypedText>
        </header>
        <AnimationBackground lightCount={5}></AnimationBackground>
    </div>
  );
}

export default PersonalPortfolio;
