import React, { Component } from 'react';
import * as axios from 'axios';

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = () => {
    const { name, email, message } = this.state;
    axios.post('/api/sendEmail', 
    {
      name,
      email,
      message
    })
    .then(result => result)
    .catch(error => console.log(error));
  }

  handleTextChange = (event) => this.setState({[event.target.name]: event.target.value})


  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }} id="contact">
         <form className="shadow p-5 contact-form">
         <h2 className="text-center pb-0 mb-0">Contact Me</h2>
         <p className="text-secondary text-center p-1 m-1">I'll get back to you ASAP</p>
           <div className="form-group">
             <label className="text-left">Name</label>
             <input value={name} onChange={this.handleTextChange} name="name" type="name" placeholder="Name..." class="form-control" />
           </div>
           <div className="form-group">
             <label className="text-left">Email</label>
             <input value={email} onChange={this.handleTextChange} name="email" type="email" placeholder="Email..." class="form-control" />
           </div>
           <div className="form-group">
             <label className="text-left">Message</label>
             <textarea value={message} onChange={this.handleTextChange} name="message" rows="5" type="message" placeholder="Email..." class="form-control" />
           </div>
         </form>
        </div>
      </div>
    );
  }
}