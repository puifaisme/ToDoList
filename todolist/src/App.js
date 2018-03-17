import React, { Component } from "react";
import "./css/Todo.css";
import addCard from "./component/Addcard";

class App extends Component {
  state = {
    todo: [],
    todoText: [],
    doing: [],
    done: [],
    number: 0,
    delete: false,
    cardD: []
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = clicked => {
    this.setState({ clicked: true });
  };

  moveTodoToDoing = () => {
    this.setState({
      doing: this.state.doing.concat([this.state.todoText]),
      number: this.state.number - 1,
      todoText: this.state.doing.splice(0, 1)
    });
  };

  increateTodo = () => {
    this.setState({
      number: this.state.number + 1,
      delete: false
    });
  };

  render() {
    var card = [];

    for (var i = 0; i < this.state.number; i++) {
      card.push(
        <ul style={{ display: this.state.delete ? "none" : "block" }}>
          <input name="todoText" type="text" onChange={this.handleInput} />
          <button onClick={this.moveTodoToDoing}>To Doing</button>
        </ul>
      );
    }

    return (
      <div class="center">
        TODOLIST
        <div class="flex-container">
          <div>
            Todo
            <br />
            {this.state.todo.map(item => <li>{item}</li>)}
            {card}
            <button class="WhiteBox" onClick={this.increateTodo}>
              add card...
            </button>
            <addCard />
          </div>
          <div>
            Doing
            <br />
            {this.state.doing.map(item => <li>{item}</li>)}
          </div>
          <div>
            Done
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
