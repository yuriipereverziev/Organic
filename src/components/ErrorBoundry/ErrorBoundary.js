import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    return this.props.children;
  }
}
