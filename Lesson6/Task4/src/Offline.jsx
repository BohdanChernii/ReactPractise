import React from 'react';

function Offline({ text }) {

  return (
    <div class="status">
      <span class="status__text">Offline</span>
      <button class="status__btn">Reconnect</button>
    </div>
  );
}
export default Offline;
