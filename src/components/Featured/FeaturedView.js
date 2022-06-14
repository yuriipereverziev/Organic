import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedList from '../FeaturedList';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class FeaturedView extends Component {
  render() {
    const {
      featuredListData, bblSort, sortItem, deleteItem, addItem, handleDrag, handleDrop, loading, error 
    } = this.props;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorMessage /> : null;

    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <FeaturedList
        featuredDate={featuredListData}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
      />
    ) : null;

    return (
      <section className="block featured">
        <div className="container">
          <h2 className="featured__title title">Featured Products</h2>

          <div className="featured__sort">
            <button type="button" className="featured__btn">All</button>
            <button type="button" className="featured__btn">Food</button>
            <button type="button" className="featured__btn">Organic</button>
            <button type="button" className="featured__btn">Fruits</button>
            <button type="button" className="featured__btn active" onClick={bblSort}>bblSort</button>
            <button type="button" className="featured__btn active" onClick={sortItem}>Sort()</button>
            <button type="button" className="featured__btn active" onClick={deleteItem}>Delete Item</button>
            <button type="button" className="featured__btn active" onClick={addItem}>Add Item</button>
          </div>

          {errorMessage}
          {spinner}
          {content}

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
