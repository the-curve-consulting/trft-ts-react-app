import React from 'react';

type State = {
  count: number;
  oldNumbers: number[];
};

export class StateDemo extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      oldNumbers: [],
    };
  }

  increment() {
    this.setState((state) => {
      return ({
        count: state.count + 1,
        oldNumbers: state.oldNumbers.concat([state.count])
      })
    });
  }

  render() {
    return (
      <>
        <p><b>Count: </b>{this.state.count}</p>
        <button onClick={() => this.increment()}>Click me</button>
        <p>
          <b>Old Numbers</b>
          <pre>{JSON.stringify(this.state.oldNumbers)}</pre>
        </p>
      </>
    );
  }
}
