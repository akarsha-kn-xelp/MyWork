import React ,{ Component } from 'react';
import Image from './Image.js';
import logo2 from './img/cover.png';
export default class Card2 extends Component{
    render()
    {
        return(
            <div className="card">
                <h1>CARD2</h1>
                <div className="card_block">
                    <Image src={logo2} class={"card2Image"} />
                    <div className="textHolder">
                        <div className="headingText">
                            No penalty on withdrawal  from  your fixed deposit
                        </div>
                        <div className="subText">
                            On First Partual Withdrawal upto 25% of your  Original FD  Principal Value
                        </div>
                        <div className="linkText">
                            KNOW MORE
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}