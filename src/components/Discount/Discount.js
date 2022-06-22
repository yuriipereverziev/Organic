import React from 'react';

import './scss/Discount.scss';
import broccoli from '../../assets/img/broccoli.png';
import setVegetables from '../../assets/img/set-vegetables.png';

export default class Discount extends React.Component {
  render() {
    return (
      <section className="block discount">
        <div className="container">
          <div className="discount__wrapper">
            <div className="discount-block">
              <div className="discount-block__info">
                <h3 className="discount-block__title">Get 10% off on Vegetables</h3>
                <p className="discount-block__text">
                  Shop our selection of organic fresh vegetables in a
                  discounted price. 10% off on all vegetables.
                </p>
                <button type="button" className="discount-block__btn">SHOP NOW</button>
              </div>

              <img className="discount-block__img" src={broccoli} alt="broccoli" />

            </div>
            <div className="discount-block discount-block--blue">
              <div className="discount-block__info">
                <h3 className="discount-block__title">Get 10% off on Vegetables</h3>
                <p className="discount-block__text">
                  Shop our selection of organic fresh vegetables in a
                  discounted price. 10% off on all vegetables.
                </p>
                <button type="button" className="discount-block__btn discount-block__btn--blue">SHOP NOW</button>
              </div>

              <img className="discount-block__img" src={setVegetables} alt="vegetables" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
