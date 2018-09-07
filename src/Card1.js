import React ,{ Component } from 'react';
import Image from './Image.js';
import logo1 from './img/bg.png';
import loc from './img/Location.svg';

export default class Card1 extends Component {
    render() {
      return (
            <div className="card">
                <h1>CARD1</h1>
                <div className="card_block">
                    <Image src={logo1} class={"card1Image"} />
                    <div className="topHolder">
                        Domestic
                    </div>
                    <div className="bottomHolder">
                        <div className="headingText">
                            Fishing In The Congo
                        </div>
                        <div className="locText">
                            <Image src={loc} class={"locImage"} />
                            Democratic Republic of the Congo
                        </div>
                    </div>
                </div>

            </div>
  
      ); 
  
   }
  }