import React, { Component } from "react";
import store from "store";
class Doing extends Component {
  state = {
    e: false,
    doing: store.get("doing")
  };
  handleClick = e => {
    this.setState({ clicked: true });
  };
  if = () => {
    if ((this.state.e = true)) {
      number: this.props.number - 1;
    } else {
      number: this.props.number;
    }
  };
  render() {
    const { card } = this.props;

    return (
      <div>
        Doing
        {card}
        <br />
        doing: {this.state.doing}
        <br />
      </div>
    );
  }
}

export default Doing;
