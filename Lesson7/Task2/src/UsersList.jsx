import React from 'react';
import User from './User.jsx';

function UsersList({ users }) {
  return (
    <div>
      <button className="btn">-</button>
      <ul className="users">
        {users.map(user => (
          <User key={users.name} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
}
export default UsersList;
