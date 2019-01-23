import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row marketing">
        <div className="col-lg-6">
          <h4>Contact</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>


          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" id="message" rows="6" required></textarea>
            </div>
            <div className="mx-auto">
              <button type="submit" className="btn btn-primary text-right">Submit</button></div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
