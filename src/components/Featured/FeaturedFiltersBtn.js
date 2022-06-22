import React, { Component } from 'react';
import './scss/Featured.scss';

export default class FeaturedFiltersBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
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
      ],
    };
  }

  render() {
    const { categories } = this.state;

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
  }
}
