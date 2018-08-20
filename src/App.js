import React, { Component } from 'react';
import logo1 from './img/bg.png';
import logo2 from './img/cover.png';
import logo3 from './img/Profile_5.png';
 import './App.css';

 class Card1 extends React.Component {
  render() {
    return (
      <div className="assignment">
        <h1>CARD1</h1>
      </div>

    ); 

 }
}
class Card2 extends React.Component {
  render() {
    return (
      <div className="assignment">
        <h1>CARD2</h1>
      </div>

    ); 

 }
}
class Card3 extends React.Component {
  render() {
    return (
      <div className="assignment">
        <h1>CARD3</h1>
      </div>

    ); 

 }
}

 class App extends React.Component {
  render() {
    return (
      <div className="assignment">
        <div className="card1">
          <Card1 />
        </div>
         <div className="card2">
          <Card2 />
        </div>
        <div className="card3">
          <Card3 />
        </div>
      </div>
    );
  }
}


export default App;
