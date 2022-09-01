import { getCounts } from '../comment/commentPopup.js';

const arr = [
  {
    creation_date: '2022-01-01',
    username: 'Abebe',
    comment: 'Amaizing',
  },
  {
    creation_date: '2022-09-01',
    username: 'Tedla',
    comment: 'Excellent',
  },
  {
    creation_date: '2022-09-01',
    username: 'Feven',
    comment: 'Smart',
  },
  {
    creation_date: '2022-09-01',
    username: 'Hewan',
    comment: 'Amaizing',
  },
  {
    creation_date: '2022-09-01',
    username: 'Bekele',
    comment: 'Best',
  },
  {
    creation_date: '2022-09-01',
    username: 'Marta',
    comment: 'Very Good',
  },
];

describe('Test a function counting number of comments', () => {
  test('Input an array with 6 elements', () => {
    expect(getCounts(arr)).toEqual(6);
  });

  test('Input an array with 6 elements', () => {
    expect(
      getCounts([
        {
          creation_date: '2022-09-01',
          username: 'Dawit',
          comment: 'very good',
        },
      ])
    ).toEqual(1);
  });

  test('Input an array with 6 elements', () => {
    expect(getCounts([])).toEqual(0);
  });
});
