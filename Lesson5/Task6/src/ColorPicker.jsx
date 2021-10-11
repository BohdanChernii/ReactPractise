import React, { Component } from 'react';

const coral = 'coral';
const aqua = 'aqua';
const bisque = 'bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  mouseOn(color) {
    this.setState({
      text: color,
    });
  }

  mouseLeave() {
    this.setState({
      text: '',
    });
  }

  

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => {
              this.mouseOn(coral);
            }}
            onMouseLeave={() => {
              this.mouseLeave();
            }}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => {
              this.mouseOn(aqua);
            }}
            onMouseLeave={() => {
              this.mouseLeave();
            }}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => {
              this.mouseOn(bisque);
            }}
            onMouseLeave={() => {
              this.mouseLeave();
            }}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
