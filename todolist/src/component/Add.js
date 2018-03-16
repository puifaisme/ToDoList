import React, { Component } from "react";
import store from "store";
class Add extends Component {
  componentWillMount() {
    store.set("doing", store.get("doing"));
  }

  state = {
    number: 0,
    e: false,
    text: "",
    doing: ""
  };
  increate = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  DoingClick = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  handleClick = e => {
    this.setState({ clicked: true });
  };
  AddtoDoing = () => {
    store.set("doing", this.state.text);
  };
  handleInput = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { number } = this.state;

    var card = [];

    for (var i = 0; i < number; i++) {
      card.push(
        <ul>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInput}
          />
          <button onClick={this.AddtoDoing}>doing</button>
        </ul>
      );
    }
    return (
      <div>
        Todo
        {card}
        <br />
        <button onClick={this.increate} class="WhiteBox">
          add card
        </button>
        doing: {this.state.doing}
      </div>
    );
  }
}

export default Add;
