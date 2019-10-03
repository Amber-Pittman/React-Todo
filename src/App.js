import React from 'react';
// import ReactDom from "react-dom";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with 
  // your state
  constructor() {
    super()

    this.state = {
      todo: Todo // uses Todo data file here
    }
  }

  clearCompleted = event => { // for the clear task button
    event.preventDefault()

    this.setState({
      todo:this.state.todo.filter(item => {
        return !item.completed
      })
    })
  }

  addTask = (taskName) => { // for the Add button
    const newTask = {
      id: Date.now(), // uses current time for ID instead of my numeric system
      task: taskName,
      completed: false
    }

    this.setState({
      todo: [newTask, ...this.state.todo]
    })
  }



  render() {
    return (
      <div>
        <div>
          <h2>The Working Parent To Do List</h2>
          <TodoForm addItem={this.addItem} />
        </div>

        <div>
          {this.state.todo.map(item => (
            <TodoList key={item.id} // use TodoList component here
                  item={item} 
                  onClick={(event) => this.toggleItem(event, item.id)}
            />
          ))}

          <button onClick={this.clearCompleted} >
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;
