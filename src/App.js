import React from 'react';
// import ReactDom from "react-dom";
//import Todo from "./components/TodoComponents/Todo";
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
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTask = event => {
    event.preventDefault();
    
    const newTask = { 
      task: this.state.todo, 
      completed: false, 
      id: Date.now()
    };

    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ""    
    });
  };

  changeToDo = event => this.setState({
    [event.target.name]: event.target.value
  });

  toggleTodoComplete = id => { 
    let todos = this.state.todos.slice();

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo
      }
    });

    this.setState({ todos });
  };

  clearCompleted = event => {  // for the clear task button
    event.preventDefault();

    let todos = this.state.todos.filter(todo => !todo.completed);

    this.setState({ todos });
  };

 


  render() {
    return (
      <div>
        <h2>The Working Parent To Do List</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
      
        <TodoForm 
          value={this.state.todo}
          handleTodoChange={this.changeToDo}
          handleAddTask={this.addTask}
          handleClearTodos={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
