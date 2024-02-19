import {setResponseError, STATUS_HTTP_MESSAGES, STATUS_API} from '../setResponseError';

describe('setResponseError', () => {
  it('should return the correct error object for a warning status', () => {
    const response = {
      anomaly: {
        label: 'Warning',
        detail: 'This is a warning',
      },
      status: STATUS_API.WARNING + '01',
    };

    const expected = {
      ...response.anomaly,
      type: 'danger',
      iconName: 'alert',
    };

    const result = setResponseError({ response });

    expect(result).toEqual(expected);
  });

  it('should return the correct error object for an error status', () => {
    const response = {
      anomaly: {
        label: 'Error',
        detail: 'This is an error',
      },
      status: STATUS_API.ERROR + '01',
    };

    const expected = {
      ...response.anomaly,
    };

    const result = setResponseError({ response });

    expect(result).toEqual(expected);
  });

  it('should return an empty object for any other status', () => {
    const response = {
      anomaly: {
        label: 'Unknown',
        detail: 'This is an unknown status',
      },
      status: 999,
    };

    const expected = {};

    const result = setResponseError({ response });

    expect(result).toEqual(expected);
  });

  it('should use the default error message if anomaly label is not provided', () => {
    const response = {
      anomaly: {
        detail: 'This is an error',
      },
      status: STATUS_API.ERROR + '01',
    };

    const expected = {
      label: STATUS_HTTP_MESSAGES[response.status],
      detail: response.anomaly.detail,
    };

    const result = setResponseError({ response });

    expect(result).toEqual(expected);
  });

  it('should use the default error message if anomaly detail is not provided', () => {
    const response = {
      anomaly: {
        label: 'Error',
      },
      status: STATUS_API.ERROR + '01',
    };

    const expected = {
      label: response.anomaly.label,
      detail: STATUS_HTTP_MESSAGES[response.status],
    };

    const result = setResponseError({ response });

    expect(result).toEqual(expected);
  });
});