import { isTheSameWeek } from './index.js';

describe('isSameWeek', () => {
  it('should return false for 2022-03-28 and 2022-03-27', () => {
    expect(isTheSameWeek('2022-03-28', '2022-03-27')).toBeFalsy();
  });

  it('should return true for 2022-03-28 and 2022-04-03', () => {
    expect(isTheSameWeek('2022-03-28', '2022-04-03')).toBeTruthy();
  });
});
