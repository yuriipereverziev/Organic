import React, { Component, createContext } from 'react';

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
    const { theme, children } = this.state;
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

export { ThemeProvider, Consumer };
