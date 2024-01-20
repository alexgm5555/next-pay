import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ButtonWompi from './page';
import { useSelector } from 'react-redux';
import mockProducts from '@/app/lib/mocks/mockProducts';
import configureStore from 'redux-mock-store';

// Mock de 'react-redux'
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
describe('ButtonWompi Component', () => {
  beforeEach(() => {
    // Limpia el estado del mock antes de cada prueba
    (useSelector).mockClear();
  });

  it('should render ButtonWompi component', async () => {
    // Configura el estado simulado para useSelector
    (useSelector).mockReturnValue({
      user: {
        // Agrega aquí la estructura de tu estado simulado...
        total: 0,
        idTran: 'transaction-id',
      },
    });

    const { getByText } = render(
      <Provider store={store} children={undefined}>
        <ButtonWompi />
      </Provider>
    );
    expect(getByText('2')).toBeTruthy()
    });
});