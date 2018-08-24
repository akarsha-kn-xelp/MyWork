import React, { Component } from 'react';
import Image from './Image.js';
import logo1 from './img/bg.png';
import logo2 from './img/cover.png';
import logo3 from './img/Profile_5.png';
import loc from './img/Location.svg';
 import './App.css';
  class Text extends React.Component {
   render() {
     return (
       <this.props.ele className={this.props.class} style={{color:this.props.color}}>{this.props.text}</this.props.ele>
     );
   }
 }
// class ImageOnImage extends React.Component {
//   render() {
//     return (
//       <img className="image" src={this.props.value} />
//     );
//   }
// }
// class HrefOnImage extends React.Component {
//   render() {
//     return (
//       <img className="image" src={this.props.value} />
//     );
//   }
// }

  
 class Card1 extends React.Component {
  render() {
    // var props = { src: logo1, height: 1000, width:800 };
    var img1_prop = { src: logo1,class:'img1' };
    var img2_prop = { src: loc,class:'loc'};
    var txt1_prop = { text: 'Domestic',class:'loc',color:'white',ele:'h1'};
    var txt2_prop = { text: 'Fishing In The Congo',class:'loc',color:'white',ele:'h1'};
    var txt3_prop = { text: 'Democratic Republic Of The Congo',class:'loc',color:'white',ele:'h3'};
    return (
      <div className="card">
        <h1>CARD1</h1>
        <div className="card_block">
         <Image {...img1_prop} />
         <Text {...txt1_prop}/>
         <Text {...txt2_prop}/>
          <div className="location">
          <Image {...img2_prop} />
          <Text {...txt3_prop}/>
          </div>
        </div>
      </div>

    ); 

 }
}
class Card2 extends React.Component {
  render() {
    var prop1 = { src: logo2 ,class:'img2'};
    var txt1_prop = { text: 'No Penalty On Withdrawal From Your Fixed Deposit',class:'loc',color:'black',ele:'h1'};
    var txt2_prop = { text: 'On First Partual Withdrawal upto 25% of your  Original FD  Principal Value',class:'loc',color:'black',ele:'h1'};
    var href_prop = { text: 'Fishing In The Congo',class:'loc',color:'black',ele:'h1'};
    return (
      <div className="card">
        <h1>CARD2</h1>
        <div className="card_block">
          <Image {...prop1} />
          <Text {...txt1_prop}/>
         <Text {...txt2_prop}/>
        </div>
      </div>

    ); 

 }
}
class Card3 extends React.Component {
  render() {
    var prop1 = { src: logo3,class:'img3' };
    return (
      <div className="card">
        <h1>CARD3</h1>
        <div className="card_block">
          <Image {...prop1} />
        </div>
      </div>

    ); 

 }
}

 class App extends React.Component {
  render() {
    return (
      <div className="assignment">
          <Card1 />
          <Card2 />
          <Card3 />
      </div>
    );
  }
}


export default App;
