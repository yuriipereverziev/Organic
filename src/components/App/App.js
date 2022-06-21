import React, { Component } from 'react';
import './App.scss';
import ErrorBoundary from '../ErrorBoundry/ErrorBoundary';
import { Consumer, ThemeProvider } from '../ThemeDark/ThemeContext';
import Header from '../Header';
import Promo from '../Promo/Promo';
import Discount from '../Discount';
import Benefit from '../Benefit';
import Categories from '../Categories';
import Statistics from '../Statistics';
import Featured from '../Featured/Featured';
import Offer from '../Offer';
import News from '../News/News';
import Footer from '../Footer';

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
