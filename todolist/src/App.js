import React, { Component } from "react";
import "./css/Todo.css";
import addCard from "./component/Addcard";

class App extends Component {
  state = {
    todo: [],
    todoText: "",
    doing: [],
    done: [],
    number: 0
  };

  handleInput = event => {
    this.setState({
      todoText: [event.target.value]
    });
  };

  delete = key => {
    this.props.delete(key);
  };

  AddtoDo = e => {
    let newItem = {
      text: e.target.value,
      key: number + 1
    };
    this.setState({
      todo: this.state.todo.concat(newItem)
    });
  };

  moveTodoToDoing = e => {
    this.setState({
      doing: this.state.doing.concat([])
    });

    this.delete();
  };

  moveDoingToDone = e => {
    this.setState({
      done: this.state.done.concat([this.state.todoText])
    });
  };

  render() {
    return (
      <div className="center">
        TODOLIST
        <div className="flex-container">
          <div>
            Todo
            <br />
            {this.state.todo.map(item => (
              <li key={item.key}>
                {item.text}
                <button onClick={this.moveTodoToDoing}>Doing</button>
              </li>
            ))}
            <input
              value={this.state.todoText}
              type="text"
              onChange={this.handleInput}
            />
            <button onClick={this.ToDo}>OK</button>
          </div>
          <div>
            Doing
            <br />
            {this.state.doing.map(item => (
              <li>
                {item}
                <button onClick={this.moveDoingToDone}>Done</button>
              </li>
            ))}
          </div>
          <div>
            Done
            <br />
            {this.state.done.map(item => <li>{item}</li>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
