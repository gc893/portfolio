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
  ],
    projects: [
      {projecctTitle: 'Link Tracker', 
      projectDescription: "App to store and manage links to important resources so that users have a centralized database of links pending review, and so that they can plan when to see them depending on their shcedules. The app also lets users see other people's links (but won't let them edit or delete), and allows them to comment on the link.", 
      projectTechnologies: ['Python', 'PostgreSQL', 'Django', 'HTML', 'CSS', 'JS', 'Bootstrap', 'Heroku'], 
      projectGithub: 'https://github.com/gc893/link-tracker', 
      projectLink: 'https://link-tracker.herokuapp.com/', 
      projectImages: [
        'https://i.imgur.com/ikvw3yS.png?2',
        'https://i.imgur.com/58I0nXo.png',
        'https://i.imgur.com/EtWBxkO.png',
        'https://i.imgur.com/WcgG19N.png',
      ]},
      {projecctTitle: 'BreadCrumbs', 
      projectDescription: "App that allows the users to search, read and comment Node guides to help them remember the main steps of buidilding a node application. The app will also let an admin user create, edit and delete guides (and steps inside those guides) to easily maintain the content of the guides.", 
      projectTechnologies: ['MongoDb', 'Express', 'Node.js', 'HTML', 'CSS', 'JS', 'Bootstrap', 'Heroku'], 
      projectGithub: 'https://github.com/gc893/bread-crumbs', 
      projectLink: 'https://breadcrumbs-io.herokuapp.com/home', 
      projectImages: [
        'https://i.imgur.com/aYr3U19.png',
        'https://i.imgur.com/uuQamzr.png',
        'https://i.imgur.com/A2n25D4.png',
      ]},
    ],
  }

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
            <Projects projects={this.state.projects} />
        </main>
        <footer>
          <div id='footer'>Gabriela Cabrera - 2020 Portfolio&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </footer>
      </>
    );
  }
}

export default App;
