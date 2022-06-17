import { INBSObject } from './INBSObject';
import { INetworkGateway } from './INetworkGateway';
import { ITokenObserver } from './ITokenObserver';

export interface INetworkClient extends INBSObject, ITokenObserver {
    getURLSuffix(): string;
    getPrefix(): string;
    getService(): string;
    getToken(): string;
    getGateway(): INetworkGateway;
}
