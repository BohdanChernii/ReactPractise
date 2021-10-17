import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  handleChange = event => {
    this.props.onTemperatureChange(event.target.value);
  };
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}</legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
        </fieldset>
      </>
    );
  }
}
export default TemperatureInput;
