import React from 'react';
import Button from 'react-bootstrap/Button';

type TenFn = (value: number) => void;

type Props = {
  initalValue: number;
  multipleOfTen?: TenFn;
}

type State = {
  count: number;
  oldNumbers: number[];
};

export class StateDemo extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initalValue,
      oldNumbers: [],
    };
  }

  increment() {
    this.setState((state) => {
      return ({
        count: state.count + 1,
        oldNumbers: state.oldNumbers.concat([state.count])
      })
    }, () => {
      if (this.props.multipleOfTen && this.state.count % 10 === 0) {
        this.props.multipleOfTen(this.state.count);
      }
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
        <Button variant="danger">Test</Button>
      </>
    );
  }
}
