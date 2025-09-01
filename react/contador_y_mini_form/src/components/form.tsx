import React, { Component } from 'react';
import type { ReactNode } from 'react';

type State = {
  nombre: string;
  edad: number;
  provincia: string;
};

class Formularios extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      nombre: '',
      edad: 0,
      provincia: ''
    };
  }

  porteñoAlert() {
    return <span>¡Porteño tenía que ser!</span>;
  }

  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          title="enter your name"
          id="input"
          value={this.state.nombre}
          onChange={e => this.setState({ nombre: e.target.value })}
        />
        <h2>How old are you?</h2>
        <input
          type="number"
          title="enter your age"
          id="input2"
          value={this.state.edad}
          onChange={e => this.setState({ edad: Number(e.target.value) })}
        />
        <h3>
          De que provincia sos?
          <p>
            <input
              type="text"
              value={this.state.provincia}
              onChange={e => this.setState({ provincia: e.target.value })}
            />
            {this.state.provincia === 'CABA' ? this.porteñoAlert() : null}
          </p>
        </h3>
      </>
    );
  }
}

export default Formularios;