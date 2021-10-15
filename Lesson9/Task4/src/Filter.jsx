import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter">
        <span className="filter__count">5</span>
        <input type="text" className="filter__input" value={this.props.filterText}/>
      </div>
    );
  }
}

export default Filter;
