import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx'

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {<Filter filterText = 'a' /* count = {} onChange = {}*//> }
        <ul className="users">
          <User name="Bohdan" age={20} />
        </ul>
      </div>
    );
  }
}

export default UserForm;
