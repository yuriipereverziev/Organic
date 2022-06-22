import React, { Component } from 'react';
import './scss/ErrorMessage.scss';

export default class ErrorMessage extends Component {
  render() {
    return (
      <div>
        <h3 className="error-title">
          Error...
        </h3>

        <p className="error-text">
          something has gone terribly wrong
        </p>
      </div>
    );
  }
}
