import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }} id="contact">
         <form className="shadow p-5 contact-form">
         <h2 className="text-center pb-0 mb-0">Contact Me</h2>
         <p className="text-secondary text-center p-1 m-1">I'll get back to you ASAP</p>
           <div className="form-group">
             <label className="text-left">Name</label>
             <input type="name" placeholder="Name..." class="form-control" />
           </div>
           <div className="form-group">
             <label className="text-left">Email</label>
             <input type="email" placeholder="Email..." class="form-control" />
           </div>
           <div className="form-group">
             <label className="text-left">Message</label>
             <textarea rows="5" type="message" placeholder="Email..." class="form-control" />
           </div>
         </form>

        </div>
      </div>
    );
  }
}