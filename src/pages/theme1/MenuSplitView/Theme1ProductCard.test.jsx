import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Theme1ProductCard from './Theme1ProductCard';
const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
let mockCart = [];
jest.mock('react-redux', () => ({ useDispatch: () => mockDispatch, useSelector: (fn) => fn({ cart: { cafe: mockCart } }) }));
jest.mock('react-router-dom', () => ({ useSearchParams: () => [new URLSearchParams('categoryId=all-items'), mockNavigate] }));
jest.mock('@tanstack/react-query', () => ({ useQueryClient: () => ({ prefetchQuery: jest.fn() }) }));
jest.mock('../../../utilities/analyticsTracking', () => ({ trackAddToCart: jest.fn() }));
jest.mock('../../../apis/products/getProduct', () => ({ getProduct: jest.fn(), PRODUCT_QUERY_KEY: (id) => [id] }));
const product = { id: 7, category_id: 2, en_name: 'Iced Latte', ar_name: 'لاتيه', en_price: '5', hide: '0', out_of_stock: '0', images: [{ id: 4, url: 'latte.jpg' }] };
const show = (overrides = {}, features = { cart: true }) => render(<ThemeProvider theme={{ mainColor: '#127272', BoxColor: '#fff' }}><Theme1ProductCard plate={{ ...product, ...overrides }} categories={[{ id: 2, discount: 10 }]} restaurantName="cafe" restaurant={{ id: 1, currency: 'dollar', activeLanguage: 'en' }} features={features} /></ThemeProvider>);
beforeEach(() => { mockDispatch.mockClear(); mockNavigate.mockClear(); mockCart = []; });
test('opens details before the image loads with one history entry and retained category', () => {
  show(); fireEvent.click(screen.getByRole('button', { name: 'View Iced Latte' }));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate.mock.calls[0][0].get('categoryId')).toBe('all-items');
  expect(mockNavigate.mock.calls[0][0].get('productId')).toBe('7');
});
test('quick-add uses the category discount', () => {
  show(); fireEvent.click(screen.getByRole('button', { name: 'Add to cart: Iced Latte' }));
  expect(mockDispatch.mock.calls[0][0].payload.item.price).toBe(4.5);
});
test('does not offer ordering when cart is disabled', () => {
  show({}, { cart: 'false' }); expect(screen.queryByRole('button', { name: /Add to cart/ })).not.toBeInTheDocument();
});
test('unavailable items can be inspected but not added', () => {
  show({ out_of_stock: '1' }); expect(screen.getByText('Unavailable')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /Add to cart/ })).not.toBeInTheDocument();
});
test('uses the first available image when no cover is selected', () => {
  const { container } = show(); expect(container.querySelector('img').src).toContain('latte.jpg');
});
test('quantity one decrements to removal', () => {
  mockCart = [{ id: 7, uniqueId: 'line-7', quantity: 1, formData: {} }]; show();
  fireEvent.click(screen.getByRole('button', { name: 'Decrease quantity of Iced Latte' }));
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_FROM_CART', payload: { restaurantName: 'cafe', uniqueId: 'line-7' } });
});
