import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'Day',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'Day' ? 'Night' : 'Day'
      };
    });
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    return (
      <Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme
        }}
      >
        { children }
      </Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, Consumer };
