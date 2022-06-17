import { HTTPMethod } from './HTTPMethod';
import { INBSObject } from './INBSObject';
import { INetworkClient } from './INetworkClient';
import { INetworkGateway } from './INetworkGateway';
import { IRequestBuilder } from './IRequestBuilder';
import { IRequestContext } from './IRequestContext';
import { TransportableData } from './TransportableData';

export interface INetworkRequest<TBody = void, TQueryParams extends Record<string, string> | void = void, TResponse = void> extends INBSObject {
    getHTTPMethod(): HTTPMethod;
    getVersion(): string;
    getHeaders(): Record<string, string>;
    getEndpoint(): string;
    getRequestData(): TBody;
    getParams(): TQueryParams;
    getBuilder(): IRequestBuilder<TResponse>;
    getSerializedRequestData(): TransportableData;
    getPath(): string;
    execute(client: INetworkClient, gateway: INetworkGateway): Promise<IRequestContext<TResponse>>;
}
