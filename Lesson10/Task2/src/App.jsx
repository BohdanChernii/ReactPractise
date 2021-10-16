import React, { Component } from 'react';
import ShopingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
          <div className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</div>
        <main className="content">
          <ShopingCart userData={this.state.userData} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}
export default App;
