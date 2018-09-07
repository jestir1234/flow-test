import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

type FuncProp = {
  str: string
};

const FuncComponent = (props: FuncProp) => {
  return <div>{props.str}</div>;
};

type TestProps = {
  str: string,
  num?: number,
  ary: Array<number>
};

type TestState = {
  message: string
};

class Test extends Component<TestProps, TestState> {
  state = { message: "Hello" };

  static defaultProps = {
    str: "Jedi Master"
  };
  h1: ?HTMLHeadingElement;

  render() {
    return (
      <div>
        <h1>{this.props.str}</h1>
        <h1>{this.props.ary.map(val => val)}</h1>
        <h1 ref={h => (this.h1 = h)}>{this.state.message}</h1>
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test ary={[1, 2, 3]} />
        <FuncComponent str={"another string"} />
      </div>
    );
  }
}

export default App;
