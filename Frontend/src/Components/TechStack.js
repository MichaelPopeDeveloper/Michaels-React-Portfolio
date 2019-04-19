import React, { Component } from 'react';
import Anime from 'react-anime';
import Typed from 'react-typed';

const TechStack = props => {
  return (
    <div id="tech-stack" className="row">
      <div className="col d-flex flex-column justify-content-around align-items-center text-center pt-5" style={{ minHeight: '110vh' }}>
      <h1>My Tech Stack</h1>
        <h1 className="">Frontend</h1>
        <div className="d-flex justify-content-center align-items-center text-center p-5" style={{ width: '100%', backgroundColor: '#E9EEE9' }}>
          <div className="d-flex flex-row justify-content-around align-items-center text-center" style={{ width: '50%' }}>
            <i className="devicon-react-original tech-logo-react"></i>
            <i class="devicon-html5-plain-wordmark colored tech-logo-HTML5"></i>
            <i class="devicon-sass-original tech-logo-sass"></i>
            <i class="devicon-typescript-plain colored tech-logo-typescript"></i>
            <i class="devicon-javascript-plain tech-logo-javascript tech-logo-javascript"></i>
          </div>
        </div>
        <h1 className="mt-4">Backend</h1>

        <div className="d-flex justify-content-center align-items-center text-center p-5" style={{ width: '100%', backgroundColor: '#E9EEE9' }}>

          <div className="d-flex flex-row justify-content-around align-items-center text-center" style={{ width: '50%' }}>
            <i className="devicon-nodejs-plain tech-logo-nodejs"></i>
            <i class="devicon-express-original-wordmark colored tech-logo-express"></i>
            <i class="devicon-mongodb-plain-wordmark colored tech-logo-sass"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TechStack;

