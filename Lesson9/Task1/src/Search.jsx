import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  hendleChange = event => {
    this.setState({ value: event.target.value });
  };

  search = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  clean = () => {
    this.setState({ value:''})
  }

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.hendleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button" type="submit" onClick={this.clean}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
