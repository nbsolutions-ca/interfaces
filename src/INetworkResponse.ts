import { INBSObject } from './INBSObject';
import { INetworkError } from './INetworkError';

export interface INetworkResponse<TResponse = void> extends INBSObject {
    hasError(): boolean;
    getResponse(): TResponse;
    getError(): INetworkError;
}
