import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetUser(this.props.userId)
  }

  fetUser = (userId)=> {
    fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: data,
      });
    });
  }
  
  render() {
    const { user } = this.state;
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{user.name}</span>

          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
