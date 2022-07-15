import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import NewsItem from './NewsItem';
import { updateNews } from '../../store/actions';

const News = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.dataNews);
  const [loading, setLoading] = useState(false);

  const getRequest = (url) => {
    setLoading(true);
    axios.get(url)
      .then((res) => {
        setLoading(false);
        dispatch(updateNews(res.data));
      })
      .catch((err) => {
        setLoading(false);
        throw new Error(
          `Could not fetch ${url}, message: "${err.message}."`
        );
      });
  };

  useEffect(() => {
    getRequest('https://fakestoreapi.com/products?limit=3');
  }, []);

  const spinner = loading ? 'Loading...' : null;
  const textBtn = !loading ? 'Request' : null;

  return (
    <section className="block news">
      <div className="container">
        <h2 className="news__title title">LATEST BLOG</h2>

        <NewsItem content={content} />

        <button
          type="button"
          className="news__btn btn active"
          onClick={() => getRequest('https://fakestoreapi.com/products?limit=1')}
        >
          {spinner}
          {textBtn}
        </button>
      </div>
    </section>
  );
};

export default News;
