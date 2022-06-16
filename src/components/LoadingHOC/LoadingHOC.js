import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

const withLoading = (WrappedComponent) => {
  return class extends Component {
    // eslint-disable-next-line react/static-property-placement
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
    };

    render() {
      const { loading, error, } = this.props;

      const hasData = !(loading || error);

      const errorMessage = error ? <ErrorMessage /> : null;

      const spinner = loading ? <Spinner /> : null;

      // eslint-disable-next-line react/jsx-props-no-spreading
      const content = hasData ? <WrappedComponent {...this.props} /> : null;

      return (
        <>
          {errorMessage}
          {spinner}
          {content}
        </>
      );
    }
  };
};

export default withLoading;
