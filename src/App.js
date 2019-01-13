import React, { Component } from 'react';
import './App.css';
import logo from './1024.png';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <img className='logo' alt='subtone logo' src={logo} />
                <h1>Legal Stuff</h1>
            </div>
        );
    }
}

export default App;
