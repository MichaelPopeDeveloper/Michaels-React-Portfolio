import React, { Component } from 'react';

 const MobileNavbar = props => {
    return (
      <div classNameName="row">
      <div classNameName="col">
    
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav className="uk-navbar-container bg-white shadow-sm" uk-navbar style={{position: 'relative', zIndex: 980}}>
        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Michael Pope</a></li>
                <li><a href="#bio">Bio</a></li>
                <li>
                    <a href="#projects">Projects</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#tech-stack">Tech Stack</a></li>
            </ul>

        </div>
    </nav>
</div>

      </div>
      </div>
    );
}

export default Navbar;


