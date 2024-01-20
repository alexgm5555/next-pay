
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ShoppingCar from './page';
import { useSelector } from 'react-redux';
import mockProducts from '@/app/lib/mocks/mockProducts';
import configureStore from 'redux-mock-store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Suspense: ({ children }) => children,
}));

const mockStore = configureStore();

const store = mockStore({
  user: {
    products: mockProducts,
    total: 10000
  },
});

describe('ShoppingCar Component', () => {
  beforeEach(() => {
    (useSelector ).mockClear();
  });

  it('should render ShoppingCar component', () => {
    (useSelector).mockReturnValue({
        products: mockProducts,
        total: 0,
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShoppingCar />
      </Provider>
    );
    expect(getByText('2')).toBeTruthy()
  });

});
