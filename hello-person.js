import React from 'react';

class HelloPerson extends React.Component {
  render () {
    return <h1>Hello, Hello, {this.props.name}</h1>;
  }
}

export default HelloPerson;
