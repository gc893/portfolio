import React, {useEffect} from 'react';
import './AboutMe.css'

const NavBar = (props) => {

    useEffect(() => {
        var dataText = [ "Hi, I'm Gabriela!"];
  
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
            // add next character to h1
            document.getElementById("about-me-h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
            }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
            if (typeof dataText[i] == 'undefined'){
                return
            }
            // check if dataText[i] exists
            if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
            });
            }
        }
        // start the text animation
        StartTextAnimation(0);
    });

    return (
        <div className='page-section responsive-section'>
            <div id='about-me' className='sub-section'>
                <h1 id='about-me-h1'>Hi, I'm Gabriela!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div style={{textAlign: 'center'}}><p> JS | MERN Stack | Python | Django | PostgreSQL</p></div>
                <div style={{textAlign: 'center'}}>
                    <a href="https://www.linkedin.com/in/gabriela-cabrera-c/" target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> &nbsp;| &nbsp;
                    <a href="https://github.com/gc893"  target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i></a> &nbsp;| &nbsp;
                    <a href="https://www.instagram.com/puyero_coding/"  target='_blank' rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> &nbsp;| &nbsp;
                    <a href="https://drive.google.com/file/d/1eDuIj8hGS8CLOzS4SNv0-DMCiJMc28pp/view?usp=sharing"  target='_blank' rel="noopener noreferrer"><i class="far fa-file-alt"></i></a>
                </div>
            </div>
            <div id='about-me-image' className='sub-section'></div>
        </div>
    );
}
 // https://drive.google.com/file/d/1eDuIj8hGS8CLOzS4SNv0-DMCiJMc28pp/view?usp=sharing
export default NavBar;