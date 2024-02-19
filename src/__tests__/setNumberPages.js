import { setNumberPages } from '../setNumberPages';

test('should return 1 when total is less than or equal to max', () => {
  expect(setNumberPages({ total: 10, max: 10 })).toBe(1);
  expect(setNumberPages({ total: 5, max: 5 })).toBe(1);
  expect(setNumberPages({ total: 1, max: 1 })).toBe(1);
});

test('should return the correct number of pages when total is greater than max', () => {
  expect(setNumberPages({ total: 10, max: 3 })).toBe(3);
  expect(setNumberPages({ total: 15, max: 5 })).toBe(2);
  expect(setNumberPages({ total: 20, max: 7 })).toBe(2);
});

test('should return 0 when total is 0', () => {
  expect(setNumberPages({ total: 0, max: 10 })).toBe(1);
});

test('should return 0 when max is 0', () => {
  expect(setNumberPages({ total: 10, max: 0 })).toBe(Infinity);
});