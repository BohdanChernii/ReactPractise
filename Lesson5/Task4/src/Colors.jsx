import React, { Component } from 'react';

const Red = '#f00';
const Green = '#0f0';
const Blue = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: Red }}
          onClick={() => {
            this.setBodyColor(Red);
          }}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: Green }}
          onClick={this.setBodyColor.bind(this, Green)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: Blue }}
          onClick={this.setBodyColor.bind(this, Blue)}
        ></button>
      </div>
    );
  }
}
export default Colors;
