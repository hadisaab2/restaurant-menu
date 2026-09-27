import { enabled, parseFeatures, localized, visibleProducts, productPrice } from './menuHelpers';

describe('Theme1 restaurant data compatibility', () => {
  test.each([false, 0, '0', 'false', null, undefined])('does not enable false-like value %s', (value) => expect(enabled(value)).toBe(false));
  test.each([true, 1, '1', 'true'])('enables supported true value %s', (value) => expect(enabled(value)).toBe(true));
  test('accepts both object and serialized feature settings', () => {
    expect(parseFeatures({ cart: true })).toEqual({ cart: true });
    expect(parseFeatures('{"cart":false}')).toEqual({ cart: false });
    expect(parseFeatures('bad data')).toEqual({});
  });
  test('falls back to the available translation', () => expect(localized({ en_name: 'Coffee', ar_name: '' }, 'name', 'ar')).toBe('Coffee'));
  test('searches both languages and excludes hidden products without hiding string zero', () => {
    const products = [
      { id: 1, en_name: 'Coffee', ar_name: 'قَهْوَة', hide: '0' },
      { id: 2, en_name: 'Coffee', ar_name: 'قهوة', hide: '1' },
      { id: 3, en_name: 'Cake', hide: false },
    ];
    expect(visibleProducts(products, ' قهوة ').map((item) => item.id)).toEqual([1]);
    expect(visibleProducts(products, 'COFFEE').map((item) => item.id)).toEqual([1]);
  });
  test('category discounts override product discounts and zero prices remain valid', () => {
    expect(productPrice({ en_price: '10', discount: 10 }, { discount: 20 }).final).toBe(8);
    expect(productPrice({ en_price: '10', discount: 10 }, { discount: 0 }).final).toBe(9);
    expect(productPrice({ en_price: 0 }).hasPrice).toBe(true);
    expect(productPrice({ en_price: null }).hasPrice).toBe(false);
  });
});
