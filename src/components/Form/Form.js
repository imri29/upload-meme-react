import React, { Component } from 'react';
import './form.css';
import FileInput from '../FileInput/FileInput';
// import axios from 'axios/index';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    description: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="שם"
          onChange={this.onChange}
          value={this.state.name}
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          onChange={this.onChange}
          value={this.state.email}
        />
        <input
          type="text"
          name="description"
          placeholder="תיאור המם"
          onChange={this.onChange}
          value={this.state.description}
        />
        <FileInput />
      </form>
    );
  }
}
