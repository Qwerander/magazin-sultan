import { PayloadAction } from '@reduxjs/toolkit';
import productsSlice, { ProductsType, ProductType } from './productsSlice';

describe('Тест productsSlice', () => {
  let initialState: ProductsType;

  beforeEach(() => {
    initialState = {
      products: [],
      manufactur: [],
      type_care: []
    };
  });

  it('должен обработать начальное состояние', () => {
    expect(productsSlice(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  it('должен обработать getProducts', () => {
    const products: Array<ProductType> = [
      { id: '1', title: 'Product 1', manufactur: 'Manufactur 1', type_care: ['type1', 'type2'] },
      { id: '2', title: 'Product 2', manufactur: 'Manufactur 2', type_care: ['type2', 'type3'] },
      { id: '2', title: 'Product 3', manufactur: 'Manufactur 2', type_care: ['type1', 'type3'] },
    ];
    const expectedState: ProductsType = {
      products,
      manufactur: ['Manufactur 1', 'Manufactur 2'],
      type_care: ["type1", "type2", "type3"]
    };
    expect(productsSlice(initialState, { type: 'products/getProducts', payload: products })).toEqual(expectedState);
  });

});