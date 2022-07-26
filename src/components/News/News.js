import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import NewsItem from './NewsItem';
import fetchNewsList from '../../store/loading/actions';

const News = () => {
  const dispatch = useDispatch();
  const { dataNews, loading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchNewsList('https://fakestoreapi.com/products?limit=3'));
  }, []);

  const spinner = loading ? 'Loading...' : null;
  const textBtn = !loading ? 'Request' : null;

  return (
    <section className="block news">
      <div className="container">
        <h2 className="news__title title">LATEST BLOG</h2>

        <NewsItem content={dataNews} />

        <button
          type="button"
          className="news__btn btn active"
          onClick={() => dispatch(fetchNewsList('https://fakestoreapi.com/products?limit=1'))}
        >
          {spinner}
          {textBtn}
        </button>
      </div>
    </section>
  );
};

export default News;
