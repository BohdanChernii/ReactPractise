import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
 state = {
    userData:null
 }

 componentDidMount() {
    this.fetUser(this.props.userId);
  }

  fetUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userData,
        });
      });
  };

  render() {

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData}/>
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}
export default App;
