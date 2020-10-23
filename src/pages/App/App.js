import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Interests from '../../components/Interests/Interests';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  state = {
    navItems: [
      {url: '/about-me', name: 'About Me', id:'about-me'},
      {url: '/projects', name: 'Projects', id:'projects'},
      {url: '/interests', name: 'Interests', id:'interests'},
      {url: '/contact', name: 'Contact', id:'contact'},
      {url: 'https://drive.google.com/file/d/1eDuIj8hGS8CLOzS4SNv0-DMCiJMc28pp/view?usp=sharing', name: 'Resume', id:'resume'}
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
      {projecctTitle: 'Snake Game', 
      projectDescription: 'Browser-based game that displays a 20x20 board on which the user can control the movement of a line of boxes (snake) by changing its direction with the keyboard arrow keys to prevent the edges of the snake from going over the borders of the board. The board will also radomly add "food" to any box on the board so that the user con intersect it with the snake and win points.', 
      projectTechnologies: ['HTML', 'CSS', 'JS'], 
      projectGithub: 'https://github.com/gc893/snake-game', 
      projectLink: 'https://snake-game-gc.netlify.app/', 
      projectImages: [
        'https://i.imgur.com/FaK0nop.png',
        'https://i.imgur.com/gBwznOk.png',
        'https://i.imgur.com/J80hj6W.png',
      ]},
    ],
    interests: [
      {interestTitle: "DOE's Industrial Assesment Centers", 
      interestDescription: 'The Department of Energy has over 31 Industrial Assessment Centers located in Universities accross the US. My first job in the engineering field was as an Undergraduate Research Assistant with the University of Miami team. They gave me the unique opportunity to work with Professors and Graduate Students conducting engineering analysis and reasearch that served the manufacturing industry by identifying opportunities for energy savings. This program is of great value for students looking to become engineers and private companies looking for savings or a smaller carbon footprint.', 
      interestField: ['Energy', 'Enginnering', 'Research'],  
      interestLink: 'https://www.energy.gov/eere/amo/industrial-assessment-centers-iacs', 
      interestImages: [
        'https://i.imgur.com/hw7SSLu.png',
      ]},
      {interestTitle: "Canine Support Group - UCV", 
      interestDescription: 'This incredible group of students from the "Universidad Central de Venezuela" finds, against all odds, time and resources to care for the dogs that live on campus. This public university, declared Cultural World Heritage Site in the year 2000 receives little to no funding from the government and is still in operation thanks to its remarkable Professors, Students and Canine copmanions.', 
      interestField: ['Non-Profit', 'Animal Rescue'],  
      interestLink: 'https://www.instagram.com/gacfc.ucv/', 
      interestImages: [
        'https://i.imgur.com/0gozNCs.png',
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
            <Interests interests={this.state.interests} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
