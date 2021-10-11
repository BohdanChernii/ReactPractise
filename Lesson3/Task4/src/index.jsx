import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";
const root = document.querySelector("#root");
ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate="2001-01-01T11:11:11.819Z" />,
  root
);
