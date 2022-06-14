import React, { Component } from 'react';
import PropTypes from 'prop-types';
import star from '../../assets/img/star.svg';

export default class FeaturedItemView extends Component {
  render() {
    const {
      srcImage, title, price, index, onDragStart, onDrop, id, isActive, step, toggleClass, handleKeyPress, item
    } = this.props;

    const activeClick = isActive ? ' featured-item__active' : '';
    const activeClassStep = step === index ? ' featured-item__active' : '';

    const activeClass = `${activeClick}` || `${activeClassStep}`;
    return (
      <div
        role="button"
        tabIndex={0}
        className={`featured-item${activeClass}`}
        id={id}
        onClick={toggleClass}
        onKeyDown={handleKeyPress}
        draggable
        onDragOver={(e) => e.preventDefault()}
        onDragStart={(e) => onDragStart(e, id)}
        onDrop={(e) => onDrop(e, item)}
      >

        <div className="featured-item__top">

          <img
            className="featured-item__img"
            src={srcImage}
            alt={title}
            // onLoad={() => console.log('loaded')}
            // onError={() => console.log('error')}
          />
        </div>
        <div className="featured-item__main">

          <span className="featured-item__price">
            $
            {price}
          </span>

          <h3 className="featured-item__title" title={title}>{title}</h3>

          <div className="featured-item__rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
        </div>
      </div>
    );
  }
}

FeaturedItemView.propTypes = {
  srcImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  toggleClass: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  // item: PropTypes.shape({
  //   category: PropTypes.string,
  //   id: PropTypes.number,
  //   image: PropTypes.string,
  //   order: PropTypes.number,
  //   price: PropTypes.number,
  //   title: PropTypes.string,
  // }).isRequired,
};
