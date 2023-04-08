import cartSlice, { addProduct, clearCart, incrementProductCount, decrementProductCount, deleteProduct } from './cartSlice';

const product = {
    id: '123',
    name: 'test',
    price: 10
  };

describe('Тест cartSlice', () => {

    it('должен добавить новый товар в корзину', () => {
        const initialState = {
            products: [],
            idList: []
        };

        const expectedState = {
            products: [{ product, count: 2 }],
            idList: ['123']
        };
        const action = addProduct({ product, count: 2 });
        const result = cartSlice(initialState, action);
        expect(result).toEqual(expectedState);
    });

    it('должно увеличить количество существующих товаров в корзине', () => {
        const initialState = {
            products: [{ product, count: 1 }],
            idList: ['123']
        };
        const expectedState = {
            products: [{ product, count: 2 }],
            idList: ['123']
        };
        const action = incrementProductCount({ id: '123' });
        const result = cartSlice(initialState, action);
        expect(result).toEqual(expectedState);
    });

    it('должно уменьшить количество существующих товаров в корзине', () => {
        const initialState = {
            products: [{ product, count: 2 }],
            idList: ['123']
        };
        const expectedState = {
            products: [{ product, count: 1 }],
            idList: ['123']
        };
        const action = decrementProductCount({ id: '123' });
        const result = cartSlice(initialState, action);
        expect(result).toEqual(expectedState);
    });

    it('deleteProduct должно удалить товар из корзины', () => {
        const initialState = {
            products: [{ product, count: 1 }],
            idList: ['123']
        };
        const expectedState = {
            products: [],
            idList: []
        };
        const action = deleteProduct({ id: '123' });
        const result = cartSlice(initialState, action);
        expect(result).toEqual(expectedState);
    });

    it('clearCart должно удалить все товары из корзины', () => {
        const initialState = {
            products: [{ product, count: 1 }],
            idList: ['123']
        };
        const expectedState = {
            products: [],
            idList: []
        };
        const action = clearCart();
        const result = cartSlice(initialState, action);
        expect(result).toEqual(expectedState);
    });
});