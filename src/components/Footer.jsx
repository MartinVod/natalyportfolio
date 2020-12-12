import React from 'react'
import './styles/Footer.css'

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();


    return (
        <div className='footer'>
            <div className='row'>
                <p className='copyright'>&copy;  כל הזכויות שמורות נטלי סוסדוב  {year}</p>
            </div>
        </div>
    )
}
