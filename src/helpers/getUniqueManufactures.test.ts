import { getUniqueManufactures } from './getUniqueManufactures';
import products from '../products/products.json' 
import { ProductType } from '../store/reducers/productsSlice';

describe('Уникальные названия производителей', () => {
  it('Должна вернуть массив уникальных производителей', () => {
    const result = getUniqueManufactures(products);
    expect(result).toEqual(['Grifon', 'Boyscout', 'Paclan', 'Nivea', 'HELP', 'Булгари Грин', 'Домашний сундук']);
  });

  it('Должна вернуть пустой массив', () => {
    const products: Array<ProductType> = [];
    const result = getUniqueManufactures(products);
    expect(result).toEqual([]);
  });
});