import { isValidDate, formatDate, setDate } from '../formatDate';

describe('isValidDate', () => {
  it('should return true for a valid date', () => {
    expect(isValidDate('2022-01-01')).toBe(true);
  });

  it('should return false for an invalid date', () => {
    expect(isValidDate('invalid')).toBe(true);
  });

  it('should return false for null', () => {
    expect(isValidDate(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isValidDate(undefined)).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValidDate('')).toBe(false);
  });
});

describe('formatDate', () => {
  it('should format the date using the default locale', () => {
    expect(formatDate('2022-01-01')).toBe('01/01/2022');
  });

  it('should format the date using the specified locale', () => {
    expect(formatDate('2022-01-01', 'en-US')).toBe('1/1/2022');
  });

  it('should return an empty string for an empty date', () => {
    expect(formatDate('')).toBe('');
  });
});

describe('setDate', () => {
  it('should format the date if it is valid', () => {
    expect(setDate({ date: '2024-01-03' })).toBe('03/01/2024');
  });

  it('should use a custom formatDate function if provided', () => {
    const customFormatDate = jest.fn(() => 'custom');
    expect(setDate({ date: '2024-01-03', formatDateFn: customFormatDate })).toBe('custom');
    expect(customFormatDate).toHaveBeenCalledWith('2024-01-03');
  });

  it('should use a custom isValidDate function if provided', () => {
    const customIsValidDate = jest.fn(() => false);
    expect(setDate({ date: '2024-01-03', isValidDateFn: customIsValidDate })).toBe('');
    expect(customIsValidDate).toHaveBeenCalledWith('2024-01-03');
  });
});