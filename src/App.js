import React, { Suspense } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary';
import { ThemeProvider } from './context/ThemeDark/ThemeContext';
import Root from './components/Root/Root';
import './i18n';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback="Loading...">

          <Root />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
export default App;
