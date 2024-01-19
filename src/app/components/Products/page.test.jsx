// page.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Products from './page';
import mockProducts from '@/app/lib/mocks/mockProducts';

const mockStore = configureStore();

describe('Products Component', () => {
  it('renders products correctly', () => {
    const store = mockStore({
      user: {
        products: mockProducts,
      },
    });
    render(
      <Provider store={store} children={<Products
          products={mockProducts}
          title="Test Title"
          action="add" 
        />}>
        <Products
          products={mockProducts}
          title="Test Title"
          action="add" 
        />,
      </Provider>
    )
    expect(screen.getByTestId('item1')).toBeTruthy();
    expect(screen.getByTestId('item2')).toBeTruthy();
  });

  it('handles add action correctly', () => {
    const mockDispatch = jest.fn();
    const store = mockStore({
      user: {
        products: mockProducts,
      },
    });
    render(
      <Provider store={store}>
        <Products
          products={mockProducts}
          title="Test Title6"
          action="add" 
        />,
      </Provider>
    )
    fireEvent.click(screen.getByTestId('item1'));
    // expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('handles remove action correctly', () => {
    const mockDispatch = jest.fn();
    const store = mockStore({
      user: {
        products: mockProducts,
      },
    });
    render(
      <Provider store={store} children={undefined}>
        <Products
          products={mockProducts}
          title="Test Title6"
          action="remove" 
        />,
      </Provider>
    )
    fireEvent.click(screen.getByTestId('item1'));
    // expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
