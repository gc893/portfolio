import React from 'react'
import './Footer.css';

const Footer = (props) => {
    return (
        <div id='footer'>
            <div id='contact'>
                <h4>Gabriela Cabrera</h4>
            </div>
            <div id='footer-center'>
                <p>Miami, Fl</p>
                <p>info@gabycabrera.com</p>
                <p><a href="https://www.linkedin.com/in/gabriela-cabrera-c/" target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> &nbsp;| &nbsp;
                <a href="https://github.com/gc893"  target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i></a> &nbsp;| &nbsp;
                <a href="https://www.instagram.com/puyero_coding/"  target='_blank' rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </p>
            </div>
            <div id='footer-right'>
                <p>Gabriela Cabrera - 2020 Portfolio&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
        </div>
    );
}
 
export default Footer;