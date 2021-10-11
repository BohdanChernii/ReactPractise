import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const root = document.querySelector('#root')
const element = (
<div>
<h1 class="title">Todo List</h1>
<main class="todo-list">
    <div class="actions">
        <input class="task-input" type="text"/>
        <button class="btn create-task-btn">Create</button>
    </div>
    <ul class="list"></ul>
</main>
</div>
  )
ReactDOM.render( element, root)
