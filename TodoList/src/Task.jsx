import React from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';

function Task({ done, text, onChange, onDelete, id }) {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input type="checkbox" 
      className="list-item__checkbox" 
      defaultChecked={done} 
      onChange={()=>onChange(id)} 
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={()=>onDelete(id)}></button>
    </li>
  );
}
Task.PropTypes={
  done: PropTypes.bool,
  text: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  id:PropTypes.number.isRequired
}
Task.defaultProps = {
  text:'',
  done:false,
}



export default Task;
