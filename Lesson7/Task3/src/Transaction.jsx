import React from 'react';
import moment from 'moment';

const Transaction = ({ rate, time, amount, from, to }) => {
  return (
    <li class="transaction">
      <span class="transaction__date">10 Jan</span>
      <span class="transaction__time">{moment(time).format('HH:mm')}</span>
      <span class="transaction__assets">
        {from} → {to}
      </span>
      <span class="transaction__rate">{Intl.NumberFormat('en-GB').format(rate)}</span>
      <span class="transaction__amount">{Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};
export default Transaction;
