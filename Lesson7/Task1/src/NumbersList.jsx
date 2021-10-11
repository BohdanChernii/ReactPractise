import React from 'react';

function NumbersList({ numbers }) {
  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}
export default NumbersList;
