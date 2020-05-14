import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceryArray: ['Avocado', 'Bananas', 'Romaine Lettuce', 'Tomatoes', 'Lemon']
    };
  }

  handleChange(filter){
    this.setState({ filterString: filter });
  }

  render(){
    let groceriesDisplay = this.state.groceryArray
    .filter((elem, index) => {
      return elem.includes(this.state.filterString);
    })
    .map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {groceriesDisplay}
      </div>
    );
  }
}

export default App;
