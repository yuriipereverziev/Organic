import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

export default class FeaturedList extends Component {
  render() {
    const { featuredDate, handleDrag, handleDrop } = this.props;

    return (
      <ul className="featured-list">
        {featuredDate.map((featuredData, index) => {
          return (
            <FeaturedItem
              {...featuredData}
              key={featuredData.id}
              index={index}
              item={featuredData}
              onDragStart={handleDrag}
              onDrop={handleDrop}
              id={featuredData.id}
            />
          );
        })}
      </ul>
    );
  }
}

FeaturedList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  featuredDate: PropTypes.arrayOf(PropTypes.object).isRequired,
  // почему ESlint не пропускает ??
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};
