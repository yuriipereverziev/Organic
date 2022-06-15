import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PromoItem extends Component {
  render() {
    const {
      banner, btnText, name, title, subtitle
    } = this.props;

    return (
      <li className="promo__wrapper">
        <h2 className="promo__title">
          {title}
          &nbsp;
          <span className="promo__stroke">{name}</span>
          {subtitle}
        </h2>
        <button type="button" className="promo__btn btn">{btnText}</button>
        <div className="promo__banner">{banner}</div>
      </li>
    );
  }
}

PromoItem.propTypes = {
  banner: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
