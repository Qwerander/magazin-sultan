import { ProductType } from "../store/reducers/productsSlice";

export function getUniqueManufactures(products: Array<ProductType>): string[] {
  const manufactures = new Set<string>();

  products.forEach((product) => {
    manufactures.add(product.manufactur!);
  });

  return Array.from(manufactures);
}