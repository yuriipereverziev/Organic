import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Day');

  const toggleTheme = useCallback(() => {
    setTheme((s) => (s === 'Day' ? 'Night' : 'Day'));
  }, [theme]);

  const contextTheme = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default { ThemeProvider, ThemeContext };
