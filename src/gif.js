import React, { Component } from 'react';
import './App.css';
import image from './images/image.gif';

class Gif extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        img: ''
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const api_key = 'dc6zaTOxFJmzC';
      const url = `https://api.giphy.com/v1/gifs/random?tag=${this.state.term}&api_key=${api_key}`;
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ term:'', img: data.data.image_url }))
        .catch(e => console.log('error', e));
    }
  
    render() {
      return (
        <div className="App">
          <div className="head">
            <h1>GIF GENERATOR</h1>
            <img src={image} className="gif-image" height="80" alt=""/>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button className="gif-button">Search!</button>
          </form>
          <img src={this.state.img} height="400" alt=""/>
        </div>
      );
    }
  }
  
  export default Gif;