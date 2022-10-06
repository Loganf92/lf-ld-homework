// App.js
import logo from './img/old logo.png';
import ldlogo from './img/ldicon.png';
import linkedinlogo from './img/linkedin.png';
import './App.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk'; // Use Feature Flags from LaunchDarkly

// The function that toggles between themes
function App() {
    // Return the layout based on the current theme
    const [buttonText, setButtonText] = useState('Go Dark');
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setButtonText('Go Light');
        } else {
            setTheme('light');
            setButtonText('Go Dark');
        }
    }

    const { imageSwitch, bottomText, linkedIn2, darkModeToggle } = useFlags() //Add the relevant flags to the useFlags constant.
    return (

        <div className='Button'>
            {darkModeToggle ? (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles />
                    <button onClick={toggleTheme}>{buttonText}</button>
                    <footer>
                    </footer>
                </>
            </ThemeProvider>
            ) : null}

            <div className="App">

                <header>
                    <br />
                    <br />
                    {imageSwitch ? (<img src={ldlogo} className="App-logo" alt="logo" />) : (
                        <img src={logo} className='Old-logo' alt="logo" />)}
                    <p>
                        <h1>{bottomText}</h1>
                    </p>
                    {linkedIn2 ? (<p>Find me on LinkedIn<br /><br /><a href='https://www.linkedin.com/in/logan-fraser/'><img src={linkedinlogo} alt="logo" width='70' /></a></p>) : null}
                </header>
            </div>
        </div>

    );
}

export default withLDProvider({
    clientSideID: '633cee1f02348111d629f62d', // Input LaunchDarkly ClientSide ID here
    user: {
        "key": "fraser.logan@gmail.com",
        "name": "Logan Fraser",
        "email": "fraser.logan@gmail.com"
    }, //Hard Coded User details to show user targetting
    options: {
        bootstrap: 'localStorage'
    },
})(App);