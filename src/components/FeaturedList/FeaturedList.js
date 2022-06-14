import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

export default class FeaturedList extends Component {
  render() {
    const { featuredDate, handleDrag, handleDrop } = this.props;

    return (
      <div className="featured-list">
        {featuredDate.map((featuredData, index) => {
          return (
            <FeaturedItem
              image={featuredData.image}
              order={featuredData.order}
              price={featuredData.price}
              title={featuredData.title}
              key={featuredData.id}
              index={index}
              item={featuredData}
              onDragStart={handleDrag}
              onDrop={handleDrop}
              id={featuredData.id}
            />
          );
        })}
      </div>
    );
  }
}

FeaturedList.propTypes = {
  featuredDate: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};
