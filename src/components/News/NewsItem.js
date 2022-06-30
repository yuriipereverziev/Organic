import React, { useState } from 'react';
import './scss/News.scss';
import name from '../../assets/img/name.png';
import tags from '../../assets/img/tags.png';
import comment from '../../assets/img/comment.png';
import image from '../../assets/img/news-lime.png';
import NewsView from './NewsView';

const NewsItem = () => {
  const dataNews = [
    {
      id: 1,
      title: 'LATEST BLOG',
      category: 'Services',
      image,
      name,
      tags,
      comment,
    },
    {
      id: 2,
      title: 'LATEST BLOG',
      category: 'Services',
      image,
      name,
      tags,
      comment,
    },
    {
      id: 3,
      title: 'LATEST BLOG',
      category: 'Services',
      image,
      name,
      tags,
      comment,
    },
  ];

  const [data] = useState(dataNews);
  
  return (
    <ul className="news-list">
      {data.map((news) => (
        <NewsView
          key={news.id}
          image={news.image}
          name={news.name}
          tags={news.tags}
          category={news.category}
          comment={news.comment}
          title={news.title}
        />
      ))}
    </ul>
  );
};

export default NewsItem;
