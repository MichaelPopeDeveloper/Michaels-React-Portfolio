import React, { Component } from 'react';
import MichaelImage from '../assets/michael.jpg';
import Anime from 'react-anime';
import Typed from 'react-typed';

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
          {/* <img src={MichaelImage} className="img-fluid rounded" style={{width: '20%', borderRadius: '15rem'}} /> */}
         
          <h1 className="display-1 home-h1">Michael Pope</h1>
          <Typed
          className="text-secondary home-secondary"
            strings={['Software Engineer',  'FullStack Developer',  'Software Engineer <span className="pl-2 pr-2"> | </span> FullStack Developer']}
            typeSpeed={80}
            backSpeed={80} 
          />
          {/* <p className="text-secondary" style={{ fontSize: '150%' }}>Software Engineer <span className="pl-2 pr-2"> | </span> FullStack Developer </p> */}
          {/* <Anime easing="easeOutElastic"
            duration={3000}
            direction="alternate"
            loop={false}
            delay={(el, index) => index * 240}
            translateX='-13rem'
            scale={[.4, .9]}> */}
            <p id="code-logo">&#60;/&#62;</p>
          {/* </Anime> */}
        </div>
      </div>
    );
  }
}


