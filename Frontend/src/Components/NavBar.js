import React, { Component } from 'react';

 const Navbar = props => {
    return (
      <div classNameName="row">
      <div classNameName="col">
    
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav className="uk-navbar-container bg-white shadow-sm" uk-navbar style={{position: 'relative', zIndex: 980}}>
        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Michael Pope</a></li>
                <li><a href="#bio">Bio</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#tech-stack">Tech Stack</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </div>
    </nav>
</div>

      </div>
      </div>
    );
}

export default Navbar;


