import React, { Component } from 'react';
import MichaelImage from '../assets/michael.jpg';
import Anime from 'react-anime';
import Typed from 'react-typed';

const About = props => {
  return (
    <div id="bio" className="row">
      <div className="col d-flex flex-column justify-content-start align-items-center text-center p-5" style={{ minHeight: '60vh', backgroundColor: '#26262D' }}>
        <div style={{width: '80%'}}>
        <h1 className="text-white text-align-left pt-4 mt-4" style={{textAlign: 'left', letterSpacing: '7px'}}>BIO</h1>
        <p className="about-p">
        I'm Michael, a self-taught software engineer & fullstack developer native to Las Vegas. I began programming almost 4 years ago and have never looked back. Since the beggining my journey into the world of tech, i've worked for a Las Vegas company working on the backend of an ECommerce platorm, as well a a variety of side projects. Programming for me is more than just a hobby, it's my passion. 
        </p>

        </div>
      </div>
    </div>
  );
}


export default About;


