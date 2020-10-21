import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import AboutMe from '../../components/AboutMe/AboutMe'
import Projects from '../../components/Projects/Projects'

class App extends Component {
  state = {
    navItems: [
      {url: '/about-me', name: 'About Me', id:'about-me'},
      {url: '/projects', name: 'Projects', id:'projects'},
      {url: '/interests', name: 'Interests', id:'interests'},
      {url: '/contact', name: 'Contact', id:'contact'}
  ]}

  render(){
    return (
      <>
        <header>
          <NavBar 
              navItems={this.state.navItems}
            />
        </header>
        <main className='container-fluid'>
            <AboutMe />
            <Projects />
        </main>
        <footer>
          <div id='footer'>Gabriela Cabrera - 2020 Portfolio&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </footer>
      </>
    );
  }
}

export default App;
