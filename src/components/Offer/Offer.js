import React, { Component } from 'react';
import './scss/Offer.scss';

export default class Offer extends Component {
  render() {
    return (
      <section className="block offer">
        <div className="container">
          <div className="offer__wrapper">
            <h2 className="offer__title">Dhamaka offer</h2>
            <p className="offer__subtitle">
              35%&nbsp;
              <span>off</span>
            </p>
            <a className="offer__btn" href="/#">BUY NOW</a>
          </div>
          <div className="offer__banner">ORANGE</div>
        </div>
      </section>
    );
  }
}
