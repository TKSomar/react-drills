import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      fruitsArray: ['Avocado', 'Bananas', 'Watermelon', 'Durian', 'Jackfruit']
    };
  }

  render(){
    let fruitDisplay = this.state.fruitsArray.map((elem, index) => {
      return <h3 key={index}>{elem}</h3>
    })

  return <div className="App">{fruitDisplay}</div>
  }
}

export default App;
