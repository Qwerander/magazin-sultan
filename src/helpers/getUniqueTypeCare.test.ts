import { getUniqueTypeCare } from './getUniqueTypeCare';
import products from '../products/products.json'
import { ProductType } from '../store/reducers/productsSlice';

describe('Уникальные типы ухода', () => {
  it('Должна вернуть маасив уникальных типов ухода', () => {
    const result = getUniqueTypeCare(products);
    expect(result).toEqual(['за руками', 'за ногами', 'за телом', 'за волосами', 'за лицом']);
  });

  it('Должна вернуть пустой массив', () => {
    const products: Array<ProductType> = [];
    const result = getUniqueTypeCare(products);
    expect(result).toEqual([]);
  });
});