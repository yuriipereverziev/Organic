import React, { useState } from 'react';
import './scss/Featured.scss';
import PropTypes from 'prop-types';
import FeaturedView from './FeaturedView';
import StoreApi from '../../services/StoreApi';
import withData from '../../hocs/withData';

let maxId = 100;
let maxOrder = 100;

const Featured = ({ data }) => {
  const [dataCart, setDataCart] = useState(data);
  const [dragId, setDragId] = useState(null);

  const sortItem = () => {
    const newArray = [...dataCart];

    newArray.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setDataCart(newArray);
  };

  const bblSort = () => {
    const arr = [...dataCart];

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < (arr.length - i - 1); j += 1) {
        if (arr[j].price > arr[j + 1].price) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    setDataCart(arr);
  };

  const deleteItem = () => {
    setDataCart((s) => [...s.slice(0, dataCart.length - 1)]);
  };

  const addItem = () => {
    maxId += 1;
    maxOrder += 1;

    const newItem = {
      id: maxId,
      order: maxOrder,
      title: 'Root product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    };

    setDataCart((s) => [...s, newItem]);
  };

  const handleDrag = (e, id) => {
    setDragId(id);
  };

  const handleDrop = (e, card) => {
    const dragItem = dataCart.find((item) => item.id === dragId);
    const dropItem = dataCart.find((item) => item.id === card.id);

    const newData = dataCart.map((item) => {
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

    newData.sort((a, b) => {
      return a.order - b.order;
    });

    setDataCart(newData);
  };

  return (
    <FeaturedView
      featuredListData={dataCart}
      bblSort={bblSort}
      sortItem={sortItem}
      deleteItem={deleteItem}
      addItem={addItem}
      handleDrag={handleDrag}
      handleDrop={handleDrop}
    />
  );
};

const { getProductsLimit } = new StoreApi();
export default withData(Featured, getProductsLimit);

Featured.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
