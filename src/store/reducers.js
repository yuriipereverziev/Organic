import { UPDATE_NEWS } from './types';

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
const news = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEWS:
      return {
        dataNews: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default news;
