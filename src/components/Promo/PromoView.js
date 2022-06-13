import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

export default class PromoView extends Component {
  render() {
    const { sliderData } = this.props;

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 5000,
      autoplaySpeed: 4000,
    };

    return (
      <section className="block promo">
        <div className="container">
          <ul className="slider">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {sliderData.map((sliderItem) => {
                return (
                  <li className="promo__wrapper" key={sliderItem.id}>
                    <h2 className="promo__title">
                      {sliderItem.title}
                      &nbsp;
                      <span className="promo__stroke">{sliderItem.name}</span>
                      {sliderItem.subtitle}
                    </h2>
                    <button type="button" className="promo__btn btn">{sliderItem.btnText}</button>
                    <div className="promo__banner">{sliderItem.banner}</div>
                  </li>
                );
              })}
            </Slider>
          </ul>
        </div>
      </section>
    );
  }
}

PromoView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sliderData: PropTypes.arrayOf(PropTypes.object).isRequired
// почему ESlint не пропускает sliderData ??
};
