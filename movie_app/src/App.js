import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log(`component Rendered`);
  }

  componentDidUpdate() {
    console.log(`i just updated`);
  }

  render() {
    console.log(`i'm rendering`);
    return (
      <div>
        <h1>I'm class {this.state.count}</h1>
        <button onClick={this.add} type="button">
          Add
        </button>
        <button onClick={this.minus} type="button">
          Minus
        </button>
      </div>
    );
  }
}

export default App;
