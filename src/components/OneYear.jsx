import React from 'react'
import './styles/Babies.css'
import Img from './../imgs/oneyear/oy1.jpg';
import Img2 from './../imgs/oneyear/oy2.jpg';
import Img3 from './../imgs/oneyear/oy3.jpg';
import Img4 from './../imgs/oneyear/oy4.jpg';
import Img5 from './../imgs/oneyear/oy5.jpg';
import Img6 from './../imgs/oneyear/oy6.jpg';
import Img7 from './../imgs/oneyear/oy7.jpg';

export default function OneYear() {
  
    return (
        <div class="rowA container oneYDiv"> 
            <div class="column">
                <img className='img-glry' src={Img} />
                <img className='img-glry' src={Img2} />

             </div>
            <div class="column">
                <img className='img-glry' src={Img5} />
                <img className='img-glry' src={Img6} />

            </div>  
            <div class="column">
                <img className='img-glry' src={Img7} />
                <img className='img-glry' src={Img3} />
                
            </div>  
            <div class="column">
                <img className='img-glry' src={Img4} />
            </div>  
        </div>
    )
}
