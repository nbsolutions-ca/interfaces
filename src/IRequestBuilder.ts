import { HTTPMethod } from './HTTPMethod';
import { INBSObject } from './INBSObject';
import { INetworkResponse } from './INetworkResponse';
import { IRequestContext } from './IRequestContext';
import { TransportableData } from './TransportableData';

export interface IRequestBuilder<TResponse> extends INBSObject {
    reset(): void;
    setHTTPMethod(method: HTTPMethod): IRequestBuilder<TResponse>;
    setAPI(api: string): IRequestBuilder<TResponse>;
    setBody(body: TransportableData): IRequestBuilder<TResponse>;
    setTimeout(timeout: number): IRequestBuilder<TResponse>;
    setHeader(name: string, value: string | null): IRequestBuilder<TResponse>;
    build(): IRequestContext<INetworkResponse<TResponse>>;
}
