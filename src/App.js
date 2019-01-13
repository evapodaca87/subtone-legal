import React, { Component } from 'react';
import './App.css';
import logo from './1024.png';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <img className='logo' alt='subtone logo' src={logo} />
                <div className='all'>
                    <p className='text'>
                        Subtone is a Chromatic Audio Tuner unlike any other. Simply start the app and play guitar,
                        piano, etc, or even sing into the microphone and it returns a specific color that correlates to
                        the correct Key. Subtone also returns the octave and exact frequency in real-time.
                    </p>
                    <h1>Legal Stuff</h1>
                    <p className='text'>
                        Subtone does not save or collect any audio from its users. Subtone uses pitchfinder js, which
                        also does not record or save any audio from its users.
                    </p>
                    <p className='text'>
                        User must agree to use of the microphone. User agrees that Subtone does not collect or share any
                        data, with anyone.
                    </p>
                    <p>2019 Evan Apodaca _ Subtone </p>
                </div>
            </div>
        );
    }
}

export default App;
