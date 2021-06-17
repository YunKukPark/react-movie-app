import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  };

  render() {
    console.log(this);
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
