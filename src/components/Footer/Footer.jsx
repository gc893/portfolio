import React from 'react'
import './Footer.css';

const Footer = (props) => {
    return (
        <div id='footer'>
            <div id='contact'>
                <p>Gabriela Cabrera</p>
            </div>
            {/* This div should definitely be a component :) */}
            <div id='footer-center'>
                <p>Miami, Fl</p>
                <p>info@gabycabrera.com</p>
                <p><a href="https://www.linkedin.com/in/gabriela-cabrera-c/" target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> &nbsp;| &nbsp;
                <a href="https://github.com/gc893"  target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i></a> &nbsp;| &nbsp;
                <a href="https://www.instagram.com/puyero_coding/"  target='_blank' rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> &nbsp;| &nbsp;
                    <a href="https://drive.google.com/file/d/1eDuIj8hGS8CLOzS4SNv0-DMCiJMc28pp/view?usp=sharing"  target='_blank' rel="noopener noreferrer"><i class="far fa-file-alt"></i></a>
                </p>
            </div>
            <div id='footer-right'>
                <p>Original React App - Oct 2020</p>
            </div>
        </div>
    );
}
 
export default Footer;