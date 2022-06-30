import React from 'react';
import PropTypes from 'prop-types';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const FeaturedList = ({ featuredDate, handleDrag, handleDrop }) => {
  return (
    <div className="featured-list">
      {featuredDate.map((featuredData, index) => (
        <FeaturedItem
          image={featuredData.image}
          price={featuredData.price}
          title={featuredData.title}
          key={featuredData.id}
          index={index}
          item={featuredData}
          onDragStart={handleDrag}
          onDrop={handleDrop}
          id={featuredData.id}
        />
      ))}
    </div>
  );
};

FeaturedList.propTypes = {
  featuredDate: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default FeaturedList;
