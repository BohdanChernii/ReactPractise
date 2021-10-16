import React from 'react';
import UsersList from './UsersList';

const App = () => {
const userList = [
  {id:0, name: 'Bohdan', age: 20},
  {id:1, name: 'Ann', age: 15},
  {id:2, name: 'Tom', age: 10},
  {id:3, name: 'Hilary', age: 18},
  {id:4, name: 'John', age: 5},
  {id:5, name: 'Kristin', age: 19},
  {id:6, name: 'Ron', age: 3},
]  
    return <UsersList users={userList}/>;
}
export default App;
