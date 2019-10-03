import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // call the setter function with the new value.
    // function is given to us through props in
    // the parent component.
    this.props.addTask(event, this.state.value)

    // reset the input field so we can add other items
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
