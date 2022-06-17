
import { INBSError } from './INBSError';
import { HTTPStatusCode } from './HTTPStatusCode';

export interface INetworkError extends INBSError<any> {
    getStatus(): HTTPStatusCode;
    getXHR(): XMLHttpRequest;
    getData(): any;
}
