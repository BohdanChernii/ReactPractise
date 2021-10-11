import React from 'react';

import UserGreating from './UserGreating.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greating = props => {
  if (props.isLoggedIn) {
    return <UserGreating />;
  }
  return <GuestGreeting />;
};

export default Greating;
