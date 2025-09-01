import React, { Component, type ReactNode } from "react";

type state = {
  ticks: number;
};

class ContadorReact extends Component<object, state> {
  constructor(props: object) {
    super(props);
    this.state = { ticks: 0 };
  }

  incrementTicks = () => {
    this.setState({ ticks: this.state.ticks + 1 });
  };

  decrementTicks = () => {
    this.setState({ ticks: this.state.ticks - 1 });
  };

  render(): ReactNode {
    return (
      <div className="container" id="padre">
        <div className="container" id="divButton">
          <h1>La cantidad de clicks es de {this.state.ticks}</h1>
          <button onClick={this.incrementTicks}>
            click me, if you can see the darkness side of me (increment)
          </button>
          <button onClick={this.decrementTicks}>
            decrement, dont take the cap
          </button>
        </div>
      </div>
    );
  }
}

export default ContadorReact;
