import React, { Component } from 'react';

class Toggler extends Component {
constructor(props) {
  super(props);
  this.state ={
    text:'Off'
  }

}

changeText = () =>{
  this.setState({
    text:this.state.text === 'Off'?'On':'Off'
  })
}

  render() {
    return (
      <div className="toggler" onClick={this.changeText}>
        {this.state.text}
      </div>
    );
  }
}
export default Toggler;
