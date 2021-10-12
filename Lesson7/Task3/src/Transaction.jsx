import React from 'react';
import moment from 'moment';

const Transaction = ({ rate, time, amount, from, to }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment('10 Jan').format("MMM D")}</span>
      <span className="transaction__time">{moment(time).format('HH:mm')}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};
export default Transaction;
