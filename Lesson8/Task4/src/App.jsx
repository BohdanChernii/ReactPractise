import React, { Component } from 'react';
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <User userId={"Facebook"}/>
    );
  }
}
export default App;
