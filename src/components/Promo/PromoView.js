import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import PromoItem from './PromoItem';

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
                  <PromoItem
                    key={sliderItem.id}
                    title={sliderItem.title}
                    subtitle={sliderItem.subtitle}
                    name={sliderItem.name}
                    btnText={sliderItem.btnText}
                    banner={sliderItem.banner}
                  />
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
  sliderData: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
