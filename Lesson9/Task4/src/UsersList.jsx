import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: '',
    };
  }
  handleChange = e => {
    this.setState({
      sorting: e.target.value,
    });
  };

  render() {
    let usersList = this.props.users;
    const result = usersList
      .filter(user => user.name.toLowerCase().includes(this.state.sorting.toLocaleLowerCase()))
      .map(user => <User key={user.id} {...user} />);
    return (
      <div>
        {
          <Filter
            filterText={this.state.sorting}
            onChange={this.handleChange}
            count={result.length}
          />
        }
        <ul className="users">{result}</ul>
      </div>
    );
  }
}

export default UserForm;
