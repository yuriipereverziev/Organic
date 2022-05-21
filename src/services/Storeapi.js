
export default class Storeapi {

    _apiBase = 'https://fakestoreapi.com';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllProducts() {
       const products = await this.getResource(`/products/`);
       return products.map(this._transformProduct)
    }

    async getProduct(id) {
         const product = await this.getResource(`/products/${id}/`);
         return this._transformProduct(product)
    }

    _transformProduct(product){
        return {
            title: product.title,
            image: product.image,
            category: product.category,
        }
    }
}
