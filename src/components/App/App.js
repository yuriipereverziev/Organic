import React, { Component } from 'react';
import './App.scss';
import Header from '../Header';
import Promo from '../Promo/Promo';
import Discount from '../Discount';
import Benefit from '../Benefit';
import Categories from '../Categories';
import Statistics from '../Statistics';
import Offer from '../Offer';
import News from '../News/News';
import Footer from '../Footer';
import Featured from '../Featured/Featured';
import ErrorBoundary from '../ErrorBoundry/ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
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
      </ErrorBoundary>
    );
  }
}
