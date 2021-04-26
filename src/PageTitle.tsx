import React from 'react';

type Props = {
  title: string;
}

export class PageTitle extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <h1 style={{color: 'red'}}>{this.props.title}</h1>
    );
  }
}
