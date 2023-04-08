import { calculateProducts } from './calculateProducts';
import products from '../products/products.json'

describe('Подсчет товаров от данного производителя', () => {


  it('должно быть возвращено правильное количество товаров от данного производителя', () => {
    expect(calculateProducts(products,'Grifon')).toBe(4);
    expect(calculateProducts(products, 'Boyscout')).toBe(2);
    expect(calculateProducts(products, 'Paclan')).toBe(2);
    expect(calculateProducts(products, 'Nivea')).toBe(4);
  });

  it('должно возвращать 0, если товаров не найдено', () => {
    expect(calculateProducts(products, 'Manufactur')).toBe(0);
  });
});