import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<NumbersList numberList={[1, 2, 3, 4, 5, 6,]}/>, rootElement);