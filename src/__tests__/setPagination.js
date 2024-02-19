import {setPagination} from '../setPagination';

describe('setPagination', () => {
  it('should return the correct pagination object', () => {
    const setCurrentPageFn = jest.fn();
    const setNumberPagesFn = jest.fn();

    const pagination = setPagination({
      total: 100,
      skip: 10,
      max: 20,
      setCurrentPageFn,
      setNumberPagesFn,
    });

    expect(pagination.total).toBe(100);
    expect(pagination.numberItems).toBe(20);
    expect(pagination.numberPages).toBe(4);
    expect(pagination.currentPage).toBe(undefined);

    expect(setCurrentPageFn).toHaveBeenCalledWith({ max: 20, skip: 10 });
  });

  it('should use default values if not provided', () => {
    const setCurrentPageFn = jest.fn();
    const setNumberPagesFn = jest.fn();

    const pagination = setPagination({
      setCurrentPageFn,
      setNumberPagesFn,
    });

    expect(pagination.total).toBe(1);
    expect(pagination.numberItems).toBe(1);
    expect(pagination.numberPages).toBe(1);
    expect(pagination.currentPage).toBe(undefined);

    expect(setCurrentPageFn).toHaveBeenCalledWith({ max: 1, skip: 1 });
  });
});