import React from 'react';
import './scss/News.scss';
import PropTypes from 'prop-types';
import NewsView from './NewsView';

const NewsItem = ({ content }) => {
  return (
    <div className="news-list">
      {content.map((newsData) => (
        <NewsView
          key={newsData.id}
          title={newsData.title}
          category={newsData.category}
        />
      ))}
    </div>
  );
};

NewsItem.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NewsItem;
