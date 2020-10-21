import React, {useEffect} from 'react';
import './AboutMe.css'

const NavBar = (props) => {

    useEffect(() => {
        var dataText = [ "Hi, I'm Gabriela Cabrera!"];
  
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
            // add next character to h1
            document.getElementById("about-me").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

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
            <div className='sub-section'>
                <h1 id='about-me'>Hi, I'm Gabriela Cabrera!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='sub-section'>
                <h1>Test</h1>
            </div>
            
        </div>
    );
}
 
export default NavBar;