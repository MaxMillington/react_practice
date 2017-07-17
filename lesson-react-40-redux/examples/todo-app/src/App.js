import React, { Component } from 'react';
import TodoContainer from './todo/TodoContainer'

import NameContainer from './name/NameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<NameContainer />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
