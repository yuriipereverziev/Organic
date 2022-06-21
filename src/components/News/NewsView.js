import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RandomProduct from '../RandomProduct/RandomProduct';

export default class NewsView extends Component {
  render() {
    const { showRandomProduct, toggleRandom } = this.props;

    return (
      <section className="block news">
        <div className="container">
          <h2 className="news__title title">LATEST BLOG</h2>

          <ul className="news-list">
            {showRandomProduct && <RandomProduct />}
          </ul>

          <button type="button" className="btn" onClick={toggleRandom}>Toggle Random</button>
        </div>
      </section>
    );
  }
}

NewsView.propTypes = {
  showRandomProduct: PropTypes.bool.isRequired,
  toggleRandom: PropTypes.func.isRequired,
};
