import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      about: '',
      student: '',
      occupation: '',
    };
  }

  heandelChange = event => {
    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <form className="login-form" onSubmit={(event) => {event.preventDefault();
      this.props.onSubmit(this.state)}}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.heandelChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
            onChange={this.heandelChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            value={this.state.occupation}
            onChange={this.heandelChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            type="text"
            className="form-input"
            value={this.state.about}
            onChange={this.heandelChange}
          />
        </div>
        <button className="submit-button" type="submit" >
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
