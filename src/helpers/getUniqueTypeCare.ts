import { ProductType } from "../store/reducers/productsSlice";

export function getUniqueTypeCare(products: Array<ProductType>): string[] {
  const typeCare = new Set<string>();

  products.forEach((product) => {
    product.type_care?.forEach((care) => {
      typeCare.add(care.trim());
    })
  });

  return Array.from(typeCare);
}