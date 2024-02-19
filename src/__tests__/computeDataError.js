import { computeDataError } from '../computeDataError';
import { STATUS_HTTP_MESSAGES, setResponseError } from '../setResponseError';

describe('computeDataError', () => {
  let response;
  let setResponseErrorFn;

  beforeEach(() => {
    response = {
      json: jest.fn().mockResolvedValue({}),
      status: 200,
    };
    setResponseErrorFn = jest.fn();
  });

  test('should call response.json() and setResponseErrorFn with correct data', async () => {
    const data = { foo: 'bar' };
    response.json.mockResolvedValue(data);

    await computeDataError(response, setResponseErrorFn);

    expect(response.json).toHaveBeenCalled();
    expect(setResponseErrorFn).toHaveBeenCalledWith({
      response: { ...data, status: response.status },
    });
  });

  test('should call setResponseErrorFn with correct error data', async () => {
    const error = new Error('Something went wrong');
    response.json.mockRejectedValue(error);

    await computeDataError(response, setResponseErrorFn);

    expect(setResponseErrorFn).toHaveBeenCalledWith({
      response: {
        anomaly: { label: STATUS_HTTP_MESSAGES[response.status] },
        status: response.status,
      },
    });
  });
});