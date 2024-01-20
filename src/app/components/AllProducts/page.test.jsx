// page.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AllProducts from './page';
import mockProducts from '@/app/lib/mocks/mockProducts';

const mockStore = configureStore();

describe('AllProducts Component', () => {
  it('renders products correctly', () => {
    const store = mockStore({
      user: {
        products: mockProducts,
      },
    });
    render(
      <Provider store={store}>
        <AllProducts
          products={mockProducts}
        />,
      </Provider>
    )
    expect(screen.getByTestId('item1')).toBeTruthy();
    expect(screen.getByTestId('item2')).toBeTruthy();
  });
});
