import React, { Component } from 'react';
import Greating from './Greating.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  logIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // const button = this.state.isLoggedIn ? (
    //   <button className="logout btn" onClick={this.logOut}>
    //     Log out
    //   </button>
    // ) : (
    //   <button className="login btn" onClick={this.login}>
    //     Login
    //   </button>
    // );

    //   if(this.state.isLoggedIn){
    //     button=<button className="logout btn" onClick={this.logOut}>Log out</button>
    //   }
    //   else{
    //     button=<button className="login btn"  onClick={this.login}>Login</button>
    //   }

    return (
      <div className="panel">
        <Greating isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <button className="logout btn" onClick={this.logOut}>
              Log out
            </button>
          ) : (
            <button className="login btn" onClick={this.logIn}>
              Login
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
