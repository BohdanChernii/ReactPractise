import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import "./styles.scss";
const root = document.querySelector("#root");
const userInfo = {
  name: "Tom",
  avatarUrl: "https://avatars.githubusercontent.com/users",
};
ReactDOM.render(
  <Comment
    author={userInfo}
    text="Good job!"
    date={new Date("2019-01-01T11:32:19.566Z")}
  />,
  root
);
