import logo from './logo.svg';
import ldlogo from './ldicon.png';
import linkedinlogo from './linkedin.png';
import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk'; // Use Feature Flags from LaunchDarkly

function App() {


  const { imageSwitch, bottomText, linkedIn2, darkModeToggle } = useFlags() //Add the relevant flags to the useFlags constant.
  return (
    <div className="App">
      <header className="App-header">
        { imageSwitch ? (<img src={ldlogo} className="App-logo" alt="logo" />) : (
        <img src={logo} className="App-logo" alt="logo" />)
} 
        <p>
          {bottomText}
        </p>


        { linkedIn2 ? (<p>Find me on LinkedIn<br/><br/><a href='https://www.linkedin.com/in/logan-fraser/'><img src={linkedinlogo} alt="logo" width='70'/></a></p>) : null } 

      </header>
    </div> 
  );
}

export default withLDProvider({
  clientSideID: '633cee1f02348111d629f62d', // Input LaunchDarkly ClientSide ID here
  options: {
    bootstrap: 'localStorage'
  },
}) (App);
