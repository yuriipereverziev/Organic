import React from 'react';
import Slider from 'react-slick';

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import PromoItem from './PromoItem';
import '../../i18n';

const PromoView = ({ sliderData }) => {
  const { t } = useTranslation();
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
                  title={t(sliderItem.title)}
                  subtitle={t(sliderItem.subtitle)}
                  name={t(sliderItem.name)}
                  btnText={t(sliderItem.btnText)}
                  banner={t(sliderItem.banner)}
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
