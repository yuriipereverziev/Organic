import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/Promo.scss';
import PromoView from './PromoView';

const Promo = () => {
  const sliderData = [
    {
      id: '1',
      title: 'slider.title',
      subtitle: 'slider.subtitle',
      name: 'slider.name',
      btnText: 'slider.btnText',
      banner: 'slider.banner'
    },
    {
      id: '2',
      title: 'slider.title',
      subtitle: 'slider.subtitle',
      name: 'slider.name',
      btnText: 'slider.btnText',
      banner: 'slider.banner'
    },
    {
      id: '3',
      title: 'slider.title',
      subtitle: 'slider.subtitle',
      name: 'slider.name',
      btnText: 'slider.btnText',
      banner: 'slider.banner'
    }
  ];

  return (
    <PromoView sliderData={sliderData} />
  );
};

export default Promo;
