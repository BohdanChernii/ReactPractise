import React, { Component } from 'react';
import LogIn from './LogIn.jsx';
import LogOut from './LogOut.jsx';
import Spinner from './Spinner.jsx';

//in:props(obj)
//out:JSX
// algo
// 1. SHOW LOGIN BY default
// 2. AFTER LOGIN CLICK - hide login & show Spinner for 2 seconds
// 3. AFTER 2 seconds - hide Spinner & show logout
// 4. AFTER logout click - hide logout & show login

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      showSpiner: false,
    };
  }

  hideLogin = () => {
    this.setState({ showSpiner: true });
    setTimeout(() => {
      this.setState({ isLogin: true });
      this.setState({ showSpiner: false });
    }, 2000);
  };

  showLogin = () => {
    this.setState({ isLogin: false });
  };

  render() {
    if (this.state.showSpiner) {
      return <Spinner size={100} />;
    }
    return this.state.isLogin ? (
      <LogOut onLogout={this.showLogin} />
    ) : (
      <LogIn onLogin={this.hideLogin} />
    );
  }
}

export default Auth;

//0. make a layout
//1. split to components
//2. static version in react
//3. declare state and props
//4. write logic