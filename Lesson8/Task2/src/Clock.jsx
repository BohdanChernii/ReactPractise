import React, { Component } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // constructor: console.log('constructor: good place to create state'),
      date: getTimeWithOffset(this.props.offset).toLocaleTimeString()
    };
  }

  //   componentDidMount() {
  //     console.log('componentDidMount: API calls, subscriptions');
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  //   }

  //   componentWillUnmount() {
  //     console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  //   }

  //   render() {
  //     console.log('return React element to build DOM')
  //     return <div>Lifecycle methods</div>;
  //   }
  // }

componentDidMount(){

  this.interval = setInterval(() => {
    this.setState({
      date : getTimeWithOffset(this.props.offset).toLocaleTimeString()
    })
  },1000)
}

componentWillUnmount(){
  clearInterval(this.interval)
}
  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">
           {this.state.date}
          </div>
        </div>
      </>
    );
  }
}
export default Clock;
