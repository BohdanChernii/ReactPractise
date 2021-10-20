import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList,updateTask,deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  
  componentDidMount() {
    this.fetchTasks();
    console.log(this.state.tasks)
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => 
        this.setState({
          tasks:tasksList,
        })
      );
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    console.log(newTask)
    createTask(newTask).then(()=>this.fetchTasks())
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id,updatedTask).then(()=>this.fetchTasks())
  };


  handleTaskStatusDelete = id => {
    deleteTask(id)
    .then(()=>this.fetchTasks())
  };

  render() {
    const sortedList = this.state.tasks
    .slice()
    .sort((a, b) => a.done - b.done);
    console.log(sortedList)
    return (
        <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskStatusDelete}
            />
          ))}
        </ul>
        </main>
    );
  }
}
export default TasksList;
