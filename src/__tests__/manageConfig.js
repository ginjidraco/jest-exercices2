import  manageConfig  from '../manageConfig';
describe('manageConfig', () => {
  it('should return the same object if apiName is API_URL.BASE', () => {
    const fetchAuthConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
      timeout: 5000,
    };

    const result = manageConfig('base', fetchAuthConfig);

    expect(result).toEqual(fetchAuthConfig);
  });

  it('should return an object without the headers property if apiName is not API_URL.BASE', () => {
    const fetchAuthConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
      timeout: 5000,
    };

    const expected = {
      timeout: 5000,
    };

    const result = manageConfig('otherApi', fetchAuthConfig);

    expect(result).toEqual(expected);
  });
});