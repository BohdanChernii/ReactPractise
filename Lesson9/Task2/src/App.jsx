import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
    handleSubmit = user => {
        console.log(user);
      };
    
  render() {
    return <UserForm onSubmit={this.handleSubmit} />;
  }
}
export default App;
