import React from 'react';

function NumbersList({ numberList }) {
  return (
    <ol>
      {numberList.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ol>
  );
}
export default NumbersList;
