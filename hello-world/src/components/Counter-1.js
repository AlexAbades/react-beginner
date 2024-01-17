import { Component, useState } from "react";
import React from "react";

export default class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter using Class function</h1>
        <h2>{this.state.count}</h2>
        <botton onClick={() => this.increment()}>Increment</botton>
      </div>
    );
  }
}
