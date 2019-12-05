import React from "react";

const TodoForm = props => {
  
    return (
      <form>
        <input
          type="text"
          name="todo"
          value={props.value}
          onChange={props.handleTodoChange}
          placeholder="Add New Task"
        />
        <button onClick={props.handleAddTodo}>Add Task</button>
        <button onClick={props.handleClearTodos}>Delete</button>
      </form>
    );
  }

export default TodoForm;
