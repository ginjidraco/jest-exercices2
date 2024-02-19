import setConfirmClassModifier from '../setConfirmClassModifier';

describe('setConfirmClassModifier', () => {
  it('should return "confirm" when hasErrors is false', () => {
    const result = setConfirmClassModifier(false);
    expect(result).toBe('confirm success');
  });

  it('should return "confirm disabled" when hasErrors is true', () => {
    const result = setConfirmClassModifier(true);
    expect(result).toBe('confirm disabled');
  });

  it('should return "customClass success" when hasErrors is false and classModifier is "customClass"', () => {
    const result = setConfirmClassModifier(false, 'customClass');
    expect(result).toBe('customClass success');
  });

  it('should return "customClass disabled" when hasErrors is true and classModifier is "customClass"', () => {
    const result = setConfirmClassModifier(true, 'customClass');
    expect(result).toBe('customClass disabled');
  });
});