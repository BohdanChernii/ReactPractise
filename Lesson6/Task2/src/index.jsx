import React from 'react';
import ReactDOM  from 'react-dom';
import "./index.scss";
import Mailbox from "./MailBox.jsx"


const root = document.querySelector("#root")
ReactDOM.render( <Mailbox  unreadMessages ={[1,2,2]}/>, root)