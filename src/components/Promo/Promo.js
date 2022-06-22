import React, { Component } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/Promo.scss';
import PromoView from './PromoView';

export default class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: [
        {
          id: '1',
          title: 'TASTY & HEALTHY',
          subtitle: 'FOOD EVERYDAY',
          name: 'ORGANIC',
          btnText: 'SHOP NOW',
          banner: 'ORANGE LEMON'
        },
        {
          id: '2',
          title: 'TASTY & HEALTHY',
          subtitle: 'FOOD EVERYDAY',
          name: 'ORGANIC',
          btnText: 'SHOP NOW',
          banner: 'ORANGE LEMON'
        },
        {
          id: '3',
          title: 'TASTY & HEALTHY',
          subtitle: 'FOOD EVERYDAY',
          name: 'ORGANIC',
          btnText: 'SHOP NOW',
          banner: 'ORANGE LEMON'
        }
      ]
    };
  }

  render() {
    const { sliderData } = this.state;

    return (
      <PromoView sliderData={sliderData} />
    );
  }
}
