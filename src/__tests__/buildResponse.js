import {buildResponse} from '../buildResponse';
import { STATUS_API } from '../setResponseError';

//je voulais test les 4 cas de retour de la fonction buildResponse mais je n'ai pas correctement compris le fonctionnement de cette fonction

describe('buildResponse', () => {
    test('should return a response correct object', async () => {
        const response = await buildResponse(`${STATUS_API.SUCCESS}`, 'DATA');
        
        expect(response).toBeDefined();
        expect(response.status).toBe(undefined);
        expect(response.message).toBe(undefined);
        expect(response.blob).toBeDefined();
    });

    test('should return a response object with the default status', async () => {
        const response = await buildResponse(null, 'DATA');
        
        expect(response).toBeDefined();
        expect(response.status).toBe('unknown');
        expect(response.message).toBe('DATA');
    });

    test('should return a response object with the default message', async () => {
        const response = await buildResponse('success');
        
        expect(response).toBeDefined();
        expect(response.status).toBe('success');
        expect(response.message).toBe('No message provided');
    });

    test('should return a response object with the default status and message', async () => {
        const response = await buildResponse();
        
        expect(response).toBeDefined();
        expect(response.status).toBe('unknown');
        expect(response.message).toBe('No message provided');
    });
}); 