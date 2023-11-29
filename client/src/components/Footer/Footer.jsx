import React from 'react';
import Logo from './queenb.png'
import './Footer.css'

function Footer(){
    return(
    <footer className="Footer">
        <img className="img-Footer" src={Logo} alt = "logo"/>
    </footer>
    )
}


export default Footer;