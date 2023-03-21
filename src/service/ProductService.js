import products from "../data/products.json";

export class ProductService {
     getProductsSmall() {
    return new Promise((res, rej) => {
      res(products.data);
    });
  }
}