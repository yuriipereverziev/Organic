export default class StoreApi {
  apiBase = 'https://fakestoreapi.com';

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`
                + `, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  };

  getAllProducts = async () => {
    const products = await this.getResource('/products/');
    return products.map(this.transformProduct);
  };

  getProductsLimit = async (limit) => {
    const productLimit = await this.getResource(`/products?limit=${limit}`);
    return productLimit.map(this.transformProduct);
  };

  getProduct = async (id) => {
    const product = await this.getResource(`/products/${id}`);
    return this.transformProduct(product);
  };

  transformProduct(product) {
    return {
      id: product.id,
      order: product.order,
      price: product.price,
      title: product.title,
      image: product.image,
      category: product.category,
    };
  }
}
