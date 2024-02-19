import  {setCurrentPage} from '../setCurrentPage';

describe('setCurrentPage', () => {
  it('should return 1 when max is 0', () => {
    const result = setCurrentPage({ max: 0, skip: 10 });
    expect(result).toBe(1);
  });

  it('should return 1 when skip is 0', () => {
    const result = setCurrentPage({ max: 10, skip: 0 });
    expect(result).toBe(1);
  });

  it('should return 1 when skip is less than max', () => {
    const result = setCurrentPage({ max: 10, skip: 2 });
    expect(result).toBe(1);
  });

  it('should return 1 when skip is equal to max', () => {
    const result = setCurrentPage({ max: 10, skip: 10 });
    expect(result).toBe(1);
  });

  it('should return SKIP/max (max) when skip is greater than max', () => {
    const result = setCurrentPage({ max: 10, skip: 15 });
    expect(result).toBe(2);
  });
});