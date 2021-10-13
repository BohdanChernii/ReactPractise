import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);
    const { innerHeight, innerWidth } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    document.title = `${this.state.width} x ${this.state.height}`
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
    document.title=`${innerWidth} x ${innerHeight}`;
  };



  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}
export default Dimensions;
