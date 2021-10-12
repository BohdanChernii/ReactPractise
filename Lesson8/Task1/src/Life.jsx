import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constructor: console.log('good place to create state'),
    };
  }

  componentDidMount() {
    console.log('API calls, subscribe');
  }

  componentWillUnmount() {
    console.log('cleanup before DOM related to component will be removed');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('decide to render or not to render');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('some updates based on new props');
  }



  render() {
    console.log('return React element to build DOM')
    return <div>Lifecycle methods</div>;
  }
}
export default Life;
