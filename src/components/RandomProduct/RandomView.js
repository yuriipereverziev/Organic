import React, { Component } from 'react';
import PropTypes from 'prop-types';
import name from '../../assets/img/name.png';
import tags from '../../assets/img/tags.png';
import comment from '../../assets/img/comment.png';
import withLoading from '../LoadingHOC/LoadingHOC';

class RandomView extends Component {
  render() {
    const { title, image, category } = this.props;

    return (
      <li className="news-item">
        <img className="news-item__prod" src={image} alt="lime" />
        <div className="news-item__main">
          <div className="news-item__info">
            <div className="news-item__name">
              <img className="news-item__img" src={name} alt="name" />
              <span className="news-item__description">By: Admin</span>
            </div>
            <div className="news-item__services">
              <img className="news-item__img" src={tags} alt="tags" />
              <span className="news-item__description">{category}</span>
            </div>
            <div className="news-item__comment">
              <img className="news-item__img" src={comment} alt="comment" />
              <span className="news-item__description">04 Comment</span>
            </div>
          </div>
          <h3 className="news-item__title">{title}</h3>
          <div className="news-item__footer">
            <span className="news-item__calendar">August 27, 2021</span>
            <a className="news-item__btn" href="/#">READ MORE ›</a>
          </div>
        </div>
      </li>
    );
  }
}

RandomView.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

RandomView.defaultProps = {
  image: null,
  title: null,
  category: null,
};

const Loader = withLoading(RandomView);
export default Loader;
