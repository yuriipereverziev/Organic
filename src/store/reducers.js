const initialState = {
  product: []
};

// eslint-disable-next-line default-param-last
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_LOADED':
      return {
        product: action.payload
      };

    default:
      return state;
  }
};

export default reducers;
