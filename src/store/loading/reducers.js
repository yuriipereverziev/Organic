import { NEWS_LIST_FETCHING, NEWS_LIST_FETCHED, NEWS_LIST_ERROR } from './types';

const initialState = {
  dataNews: [
    {
      id: 1,
      category: 'test1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 2,
      category: 'test2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 3,
      category: 'clothing',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
  loading: true,
};

// eslint-disable-next-line default-param-last
const newsList = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST_FETCHING:
      return {
        ...state,
        loading: true,
      };

    case NEWS_LIST_FETCHED:
      return {
        ...state,
        dataNews: action.payload,
        loading: false,
      };
    case NEWS_LIST_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default newsList;
