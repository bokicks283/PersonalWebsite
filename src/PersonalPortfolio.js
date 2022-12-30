import logo from './middle-finger.svg';
import './PersonalPortfolio.css';
import NavBar from './NavBar';

function PersonalPortfolio() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my web site bitttttttttch.
        </p>
      </header>
    </div>
  );
}

export default PersonalPortfolio;
