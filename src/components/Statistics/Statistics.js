import React, { Component } from 'react';

import './scss/Statistics.scss';

export default class Statistics extends Component {
  render() {
    return (
      <section className="block statistics">
        <div className="container">

          <h2 className="visually-hidden">Statistics</h2>
          <ul className="statistics__list">
            <li className="statistics__item">
              1570+
              <span className="statistics__info">Total Products</span>
            </li>
            <li className="statistics__item">
              3560+
              <span className="statistics__info">Satisfied Clients</span>
            </li>
            <li className="statistics__item">
              4550+
              <span className="statistics__info">Project Completed</span>
            </li>
            <li className="statistics__item">
              130+
              <span className="statistics__info">Awards Winning</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
