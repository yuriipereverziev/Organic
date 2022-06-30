import React from 'react';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <section className="block news">
      <div className="container">
        <h2 className="news__title title">LATEST BLOG</h2>

        <NewsItem />

      </div>
    </section>
  );
};

export default News;
