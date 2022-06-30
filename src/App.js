import React from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary';
import { ThemeProvider } from './context/ThemeDark/ThemeContext';
import Root from './components/Root/Root';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
export default App;
