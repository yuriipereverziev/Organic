const productsLoaded = (newProduct) => {
  return {
    type: 'PRODUCTS_LOADED',
    payload: newProduct
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  productsLoaded
};
