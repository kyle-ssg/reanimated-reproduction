import React, { Component } from 'react';

class MarkupPage extends Component {
  displayName = 'MarkupPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Use storybook
    document.location = 'http://localhost:4000';
  }

  render() {
    return (
        <div className="container" />
    );
  }
}


export default MarkupPage;
