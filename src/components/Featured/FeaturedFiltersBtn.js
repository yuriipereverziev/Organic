import React from 'react';
import './scss/Featured.scss';

const FeaturedFiltersBtn = () => {
  const categories = [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Food',
    },
    {
      id: 3,
      title: 'Organic',
    },
    {
      id: 4,
      title: 'Fruits',
    }
  ];

  return (
    <>
      {categories.map((item) => {
        return (
          <button
            key={item.id}
            type="button"
            className="featured__btn"
          >
            {item.title}
          </button>
        );
      })}
    </>
  );
};

export default FeaturedFiltersBtn;
