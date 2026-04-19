const { combineUsers } = require('../index');
require('datejs');

describe('combineUsers', () => {
  test('returns an object with users and merge_date', () => {
    const result = combineUsers(["A"], ["B"]);

    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('merge_date');
  });

  test('merges arrays correctly', () => {
    const result = combineUsers(["A"], ["B", "C"]);

    expect(result.users).toEqual(["A", "B", "C"]);
  });

  test('adds today’s date', () => {
    const result = combineUsers(["A"]);

    expect(result.merge_date).toBe(
      Date.today().toString("M/d/yyyy")
    );
  });
});
