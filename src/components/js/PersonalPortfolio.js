// import reactLogo from "../../logo.svg"
import '../css/PersonalPortfolio.css';
// import NavBar from './NavBar';
import TypedText from './TypedTextIntro'

function PersonalPortfolio(props) {
  return (
    <div className="App">
      {/* <NavBar text="this is my navbar bitttttch" reactLogo={reactLogo}></NavBar> */}
      <header className="App-header">
        <TypedText name="Ronald Bocchichio"></TypedText>
      </header>
    </div>
  );
}

export default PersonalPortfolio;
