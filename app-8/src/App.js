import React, { Component } from 'react';
import './App.css';

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      obiWan: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/10/").then(response => {
      this.setState({
        obiWan: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.obiWan.name}</h1>
        <h1>Birth Year: {this.state.obiWan.birth_year}</h1>
        <h1>Height: {this.state.obiWan.height}</h1>
        <h1>Eye Color: {this.state.obiWan.eye_color}</h1>
      </div>
    );
  }
}

export default App;
