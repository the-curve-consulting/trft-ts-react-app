import React from 'react';

type Props = {
  title: string;
}

export class PageTitle extends React.Component<Props> {

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
