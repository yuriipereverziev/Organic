import axios from 'axios';
import { NEWS_LIST_FETCHING, NEWS_LIST_FETCHED, NEWS_LIST_ERROR } from './types';

export const newsListFetching = () => ({ type: NEWS_LIST_FETCHING });
export const newsListFetched = (value) => ({ type: NEWS_LIST_FETCHED, payload: value });
export const newsListError = () => ({ type: NEWS_LIST_ERROR });

const fetchNewsList = (url) => (dispatch) => {
  axios.get(url)
    .then((res) => {
      dispatch(newsListFetched(res.data));
    })
    .catch((err) => {
      throw new Error(
        `Could not fetch ${url}, message: "${err.message}."`
      );
    });
};

export default fetchNewsList;
