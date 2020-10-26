import React from 'react'
import Links from '../Links/Links'
import './Footer.css';

const Footer = (props) => {
    return (
        <div id='footer'>
            <div id='contact'>
                <p>Gabriela Cabrera</p>
            </div>

            <div id='footer-center'>
                <p>Miami, Fl</p>
                <p>info@gabycabrera.com</p>
                <Links />
            </div>
            <div id='footer-right'>
                <p>Original React App - Oct 2020</p>
            </div>
        </div>
    );
}
 
export default Footer;