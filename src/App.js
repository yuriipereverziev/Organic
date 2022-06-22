import React, { Component } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary';
import { Consumer, ThemeProvider } from './context/ThemeDark/ThemeContext';
import Header from './layout/Header';
import Promo from './components/Promo/Promo';
import Discount from './components/Discount';
import Benefit from './components/Benefit';
import Categories from './components/Categories';
import Statistics from './components/Statistics';
import Featured from './components/Featured/Featured';
import Offer from './components/Offer';
import News from './components/News/News';
import Footer from './layout/Footer';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <Consumer>
            {(context) => (
              <div className={`App ${context.theme}`}>
                <Header />
                <Promo />
                <Discount />
                <Benefit />
                <Categories />
                <Statistics />
                <Featured />
                <Offer />
                <News />
                <Footer />
              </div>
            )}
          </Consumer>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}
