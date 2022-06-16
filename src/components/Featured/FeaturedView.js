import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedFilter from './FeaturedFilter';
import Loader from '../FeaturedList';

export default class FeaturedView extends Component {
  render() {
    const {
      featuredListData, bblSort, sortItem, deleteItem, addItem, handleDrag, handleDrop, loading, error
    } = this.props;

    return (
      <section className="block featured">
        <div className="container">
          <h2 className="featured__title title">Featured Products</h2>

          <div className="featured__sort">

            <FeaturedFilter />

            <button type="button" className="featured__btn active" onClick={bblSort}>bblSort</button>
            <button type="button" className="featured__btn active" onClick={sortItem}>Sort()</button>
            <button type="button" className="featured__btn active" onClick={deleteItem}>Delete Item</button>
            <button type="button" className="featured__btn active" onClick={addItem}>Add Item</button>
          </div>

          <Loader
            featuredDate={featuredListData}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            loading={loading}
            error={error}
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
