import { ProductType } from "../store/reducers/productsSlice";

export function calculateProducts(products: Array<ProductType>, manufactur: string): number {
    let count = 0;
    products.forEach((product) => {
        if (product.manufactur === manufactur) {
            count++
        }
    })
     
  return count
}