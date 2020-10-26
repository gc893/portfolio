import React, {useEffect} from 'react';
import Link from '../Links/Links'
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
                <p>I'm a software developer passionate about both design and implementation. I code with reliability and usability in mind, and only once I have a clear plan. My background as an Industrial Engineer taught me the importance of managing scarce resources, such as time, adequately. Because of this, I place special emphasis to planning. This helps me spend less time maintaining and debugging, and more time creating. From CSS design to algorithm design, I add each line of code with care and precision so that my code is lean, predictable, and easy to use and maintain.</p>
                <div style={{textAlign: 'center'}}><p> JS | MERN Stack | Python | Django | PostgreSQL</p></div>
                <Link />
            </div>
            <div id='about-me-image' className='sub-section'></div>
        </div>
    );
}
 // https://drive.google.com/file/d/1eDuIj8hGS8CLOzS4SNv0-DMCiJMc28pp/view?usp=sharing
export default NavBar;