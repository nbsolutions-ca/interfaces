
import { IRequestContext } from './IRequestContext';
import { INetworkRequest } from './INetworkRequest';
import { INetworkClient } from './INetworkClient';

export interface INetworkGateway {
    request<TResponse>(client: INetworkClient, request: INetworkRequest<any, any, any>): IRequestContext<TResponse>;
}
