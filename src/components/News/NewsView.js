import React from 'react';
import PropTypes from 'prop-types';
import name from '../../assets/img/name.png';
import tags from '../../assets/img/tags.png';
import comment from '../../assets/img/comment.png';
import image from '../../assets/img/news-lime.png';

const NewsView = ({
  title, category
}) => {
  return (
    <div className="news-item">
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
    </div>
  );
};

NewsView.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsView;
