import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import PromoItem from './PromoItem';

const PromoView = ({ sliderData }) => {
  return (
    <section className="block promo">
      <div className="container">
        <ul className="slider">
          <Slider
            infinite
            slidesToShow={1}
            slidesToScroll={1}
            arrows
            speed={5000}
            autoplaySpeed={4000}
          >
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
};

PromoView.propTypes = {
  sliderData: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default PromoView;
