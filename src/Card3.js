import React ,{ Component } from 'react';
import Image from './Image.js';
import logo3 from './img/Profile_5.png';
export default class Card3 extends Component{
    render()
    {
        return(
            <div className="card">
                <h1>CARD3</h1>
                <div className="card_block">
                    <Image src={logo3} class={"card3Image"} />
                    <div className="textHolder">
                        <div className="headingText">
                            Alexandra Dadario
                        </div>
                        <div className="subText">
                            Parker Industries
                        </div>
                    </div>
                    <div className="buttonHolder">
                        UX DESIGNER
                    </div>
                    <div className="footerHolder">
                        <div className="footerText">
                            USUALLY COLLABORATED WITH
                        </div>
                        <div className="PROFILE">
                            USUALLY COLLABORATED WITH
                        </div>

                    </div>
                    <div className="profileHolder">
                    </div>
                </div>
            </div>
        )
    }
}