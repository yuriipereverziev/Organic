import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedFiltersBtn from './FeaturedFiltersBtn';
import FeaturedList from '../FeaturedList';

export default class FeaturedView extends Component {
  render() {
    const {
      featuredListData,
      bblSort,
      sortItem,
      deleteItem,
      addItem,
      handleDrag,
      handleDrop
    } = this.props;

    return (
      <section className="block featured">
        <div className="container">
          <h2 className="featured__title title">Featured Products</h2>

          <div className="featured__sort">

            <FeaturedFiltersBtn />

            <button type="button" className="featured__btn active" onClick={bblSort}>bblSort</button>
            <button type="button" className="featured__btn active" onClick={sortItem}>Sort()</button>
            <button type="button" className="featured__btn active" onClick={deleteItem}>Delete Item</button>
            <button type="button" className="featured__btn active" onClick={addItem}>Add Item</button>
          </div>

          <FeaturedList
            featuredDate={featuredListData}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />

        </div>
      </section>
    );
  }
}

FeaturedView.propTypes = {
  featuredListData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  bblSort: PropTypes.func.isRequired,
  sortItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};
