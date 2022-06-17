
import {INBSObject} from './INBSObject';
import { INetworkResponse } from './INetworkResponse';
import { IRequestContextEventEmitter } from './IRequestContextEventEmitter';
import { RequestState } from './RequestState';

export interface IRequestContext<TResponse> extends INBSObject {
    abort(): void;
    getState(): RequestState;
    getDownEventEmitter(): IRequestContextEventEmitter<INetworkResponse<TResponse>>;
    getUpEventEmitter(): IRequestContextEventEmitter<void>;
    send(): Promise<INetworkResponse<TResponse>>;
}
