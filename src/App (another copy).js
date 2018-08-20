import React, { Component } from 'react';
import logo1 from './img/bg.png';
import logo2 from './img/cover.png';
import logo3 from './img/Profile_5.png';
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Assignment">
        <div className="Card1">
          <h1>CARD1</h1>
          <div className="Container1">
            <img src={logo1} className="App-logo" alt="logo"  />
            <div className="Top-left">Domestic</div>
            <div className="Bottom-left">Fishing In The Combo</div>
            <div className="Bottom-left1">Democratic Republic of the Congo</div>
          </div>
        </div>
        <div className="Card2">
          <h1>CARD2</h1>
          <div className="Container1">
            <img src={logo2} className="App-logo" alt="logo"  />
          </div>
        </div>
        <div className="Card3">
          <h1>CARD3</h1>
          <div className="Container1">
            <img src={logo3} className="App-logo" alt="logo"  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
