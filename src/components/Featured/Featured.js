import React, { Component } from 'react';
import './scss/Featured.scss';
import PropTypes from 'prop-types';
import FeaturedView from './FeaturedView';
import StoreApi from '../../services/StoreApi';
import withData from '../../hocs/withData';

class Featured extends Component {
  maxId = 100;

  maxOrder = 100;

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data,
      dragId: null,
    };
  }

  sortItem = () => {
    this.setState(({ data }) => {
      const newArray = [...data];

      newArray.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });

      return {
        data: newArray
      };
    });
  };

  bblSort = () => {
    this.setState(({ data }) => {
      const arr = [...data];

      for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < (arr.length - i - 1); j += 1) {
          if (arr[j].price > arr[j + 1].price) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }

      return {
        data: arr
      };
    });
  };

  deleteItem = () => {
    this.setState(({ data }) => {
      const newArray = [...data.slice(0, data.length - 1)];
      return { data: newArray };
    });
  };

  addItem = () => {
    this.maxId += 1;
    this.maxOrder += 1;

    const newItem = {
      id: this.maxId,
      order: this.maxOrder,
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    };

    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return { data: newArray };
    });
  };

  handleDrag = (e, id) => {
    this.setState({
      dragId: id
    });
  };

  handleDrop = (e, card) => {
    const { dragId } = this.state;

    this.setState(({ data }) => {
      const newArray = [...data];

      const dragItem = newArray.find((item) => item.id === dragId);
      const dropItem = newArray.find((item) => item.id === card.id);

      const newArrayData = newArray.map((item) => {
        if (item.id === dragId) {
          return {
            ...item,
            order: dropItem.order
          };
        }
        if (item.id === card.id) {
          return {
            ...item,
            order: dragItem.order
          };
        }
        return item;
      });

      newArrayData.sort((a, b) => {
        return a.order - b.order;
      });

      return { data: newArrayData };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <FeaturedView
        featuredListData={data}
        bblSort={this.bblSort}
        sortItem={this.sortItem}
        deleteItem={this.deleteItem}
        addItem={this.addItem}
        handleDrag={this.handleDrag}
        handleDrop={this.handleDrop}
      />
    );
  }
}

const { getProductsLimit } = new StoreApi();

export default withData(Featured, getProductsLimit);

Featured.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
