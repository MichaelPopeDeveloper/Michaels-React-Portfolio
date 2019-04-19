import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import Projects from './Components/Projects';
import TeckStack from './Components/TechStack';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import './styles/app.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{padding: '0px'}}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TeckStack />
      <Contact />
      </div>
    );
  }
}

export default App;
