import React, { Component } from 'react';
import StoreApi from '../../services/StoreApi';
import Loader from './RandomView';

export default class RandomProduct extends Component {
  storeApi = new StoreApi();

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
      error: false,
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
      product,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateProduct = () => {
    const id = Math.floor(Math.random() * 10);
    this.storeApi
      .getProduct(id)
      .then(this.onProductLoaded)
      .catch(this.onError);
  };

  render() {
    const { product, loading, error } = this.state;

    return (
      <Loader
        title={product.title}
        image={product.image}
        category={product.category}
        loading={loading}
        error={error}
      />
    );
  }
}
