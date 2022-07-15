import React, { Suspense } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary';
import { ThemeProvider } from './context/ThemeDark/ThemeContext';
import Root from './components/Root/Root';
import './i18n';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <Suspense fallback="Loading...">
            <Root />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
};
export default App;
