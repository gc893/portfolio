import React, {Component} from 'react';
import logo from './logo.svg';
import './NavBar.css';

class NavBar extends Component {
  state = {

  }
    render(){
        return (
            <div className="App">
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                <img src={logo} className="App-logo" alt="logo" />
                </a>
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {/* map links from state here */}
                    <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="/">Features</a>
                    <a class="nav-link" href="/">Pricing</a>
                    <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
                </nav>
            </header>
            </div>
        );
    }
}

export default NavBar;