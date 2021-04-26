import React from 'react';

type Props = {
  onChange: (newTitle: string) => void;
};

type State = {
  value: string;
};

export class EditTitle extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  changeTitle() {
    this.props.onChange(this.state.value);
  }


  render() {
    return (
      <>
        <form>
          <input type="text" value={this.state.value}
           onChange={(e) => this.setState({ value: e.target.value })} />
          <button onClick={() => this.changeTitle()} type="button">Change</button>
        </form>
      </>
    );
  }
}
