import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.querySelector("#root");
const styles = {
  color: 'red', 
  fontWeight: 700
}
const element = (
  <main class="page">
  <form class="login-form">
    <h1 class="form-title">Profile</h1>
    <div class="form-control">
      <label class="form-label" for="name">Name</label>
      <input
        class="form-input"
        type="text"
        id="name"
        name="name"
        value="anonymous"
      />
    </div>
    <div class="form-control">
      <label class="form-label" id="age" for="age">Age</label>
      <input class="form-input" type="number" value="17" name="age" />
      <span style={styles}>To young</span>
    </div>
    <button class="submit-button" type="submit">Submit</button>
  </form>
</main>
);
ReactDOM.render(element, root);
