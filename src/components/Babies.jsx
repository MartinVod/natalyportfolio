import React from 'react'
import './styles/Babies.css'
import Img from './../imgs/newbornImg/nb1.jpg';
import Img2 from './../imgs/newbornImg/nb2.jpg';
import Img3 from './../imgs/newbornImg/nb3.jpg';
import Img4 from './../imgs/newbornImg/nb4.jpg';
import Img5 from './../imgs/newbornImg/nb5.jpg';
import Img6 from './../imgs/newbornImg/nb6.jpg';
import Img7 from './../imgs/newbornImg/nb7.jpg';
import Img8 from './../imgs/newbornImg/nb8.jpg';

export default function Babies() {
    return (
        <div class="rowA container oneYDiv"> 
            <div class="column">
                <img className='img-glry' src={Img} />
                <img className='img-glry' src={Img2} />
                </div>
                <div class="column">
                <img className='img-glry' src={Img3} />
                <img className='img-glry' src={Img4} />
                </div>
                <div class="column">
                <img className='img-glry' src={Img5} />
                <img className='img-glry' src={Img6} />
                </div>
                <div class="column">
                <img className='img-glry' src={Img7} />
                <img className='img-glry' src={Img8} />
                </div>
               
         
            
            </div>
    )
}
