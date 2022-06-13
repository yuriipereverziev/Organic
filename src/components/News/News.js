import React, { Component } from 'react';

import './News.scss';
import NewsView from './NewsView';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRandomProduct: true,
    };
  }

  toggleRandomProduct = () => {
    this.setState((state) => {
      return {
        showRandomProduct: !state.showRandomProduct
      };
    });
  };

  render() {
    const { showRandomProduct } = this.state;

    return (
      <NewsView showRandomProduct={showRandomProduct} toggleRandom={this.toggleRandomProduct} />
    );
  }
}
