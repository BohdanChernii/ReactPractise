import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.querySelector("#root");
const renderSeconds = (time) => {
const seconds = new Date().getSeconds(time);
const backgroundColor = seconds % 2 === 0 ? '#fff':'#000'
const textColor = seconds % 2 !== 0 ? '#fff':'#000'
const styles = {
  color: textColor,
  backgroundColor
}
const element = (
  <div class="seconds" style={styles}>Now is {seconds}</div>
);
ReactDOM.render(element, root);
}

renderSeconds(new Date())

setInterval(() => {renderSeconds(new Date())},1000 )