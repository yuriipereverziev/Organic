import React, { Component } from 'react';
import StoreApi from '../../services/StoreApi';
import RandomView from './RandomView';

export default class RandomProduct extends Component {
  storeApi = new StoreApi();

  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.updateProduct();
    this.interval = setInterval(this.updateProduct, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onProductLoaded = (product) => {
    this.setState({
      product
    });
  };

  updateProduct = () => {
    const id = Math.floor(Math.random() * 10);
    this.storeApi
      .getProduct(id)
      .then(this.onProductLoaded);
  };

  render() {
    const { product: { title, image, category } } = this.state;

    return (
      <RandomView title={title} image={image} category={category} />
    );
  }
}
