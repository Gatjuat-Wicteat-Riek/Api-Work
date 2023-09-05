import React, { Component } from "react";
import "./App.css";

export class PracticeMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello please welcome to our home and click the shop below</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment} className="btn">
          +
        </button>
        <button onClick={this.Decrement} className="bt">
          -
        </button>
      </div>
    );
  }
}

export default PracticeMore;
