import React, { Component } from 'react';
import './App.css';

import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://pureplaystation.com/wp-content/uploads/2019/05/Elysium2-2.jpg"} />
      </div>
    )
  }
}

export default App;
