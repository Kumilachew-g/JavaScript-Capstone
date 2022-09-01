import { countItems } from '../home-page/show.js';

describe('count number of items on the page', () => {
  test('input an array with 3 elements', () => {
    expect(countItems(['action', '2342', 'show3'])).toEqual(3);
  });
  test('Input number of items with no item', () => {
    expect(countItems([])).toEqual(0);
  });
});