import React from 'react';
import logo from './logo.svg';
import './NavBar.css';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <a className="navbar-brand" href="/">Gabriela Cabrera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {props.navItems.map((navItem, idx) => 
                            <Link
                                className="nav-link"
                                key={idx}
                                activeClass="active"
                                to={navItem.id}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                {navItem.name}
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
    );
}
 
export default NavBar;