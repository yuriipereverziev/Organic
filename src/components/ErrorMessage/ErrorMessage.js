import React from 'react';
import './scss/ErrorMessage.scss';

const ErrorMessage = () => {
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
};
export default ErrorMessage;
