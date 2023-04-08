import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { CartPage } from './CartPage';
import { store } from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

describe('Страница корзины', () => {
  it('Должна быть надпись что корзина пуста', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>

    )
    const emptyCart = store.getState().cart.products.length === 0
    if (emptyCart) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.getByText('Ваша корзина пуста')).toBeInTheDocument(); 
    }

  })
})
