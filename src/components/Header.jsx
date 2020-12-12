import React from 'react'
import Logo from './../imgs/logo.jpeg';
import './styles/Header.css';

export default function Header() {
    return (
        <div id='logoDiv'>
            <img src={Logo} alt='' />
        </div>
    )
}
