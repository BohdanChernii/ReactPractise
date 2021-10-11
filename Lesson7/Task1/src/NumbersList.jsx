import React from 'react';

function NumbersList({ numberList }) {
  return (
    <ul>
      {numberList.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}
export default NumbersList;
