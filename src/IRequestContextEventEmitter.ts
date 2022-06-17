
import {IEventEmitter} from './IEventEmitter';
import {VoidFunction} from './CommonCallbackSignatures';
import {IOnProgressCallback} from './IOnProgressCallback';
import { INetworkError } from './INetworkError';

export interface IRequestContextEventEmitter<TResponse> extends IEventEmitter {
    registerAbort(callback: VoidFunction): void;
    unregisterAbort(callback: VoidFunction): void;
    emitAbort(): void;
    registerTimeout(callback: VoidFunction): void;
    unregisterTimeout(callback: VoidFunction): void;
    emitTimeout(): void;
    registerProgress(callback: IOnProgressCallback): void;
    unregisterProgress(callback: IOnProgressCallback): void;
    emitProgress(byteCount: number, totalBytes: number): void;
    registerError(callback: (error: INetworkError) => void): void;
    unregisterError(callback: (error: INetworkError) => void): void;
    emitError(error: INetworkError): void;
    registerComplete(callback: (response: TResponse) => void): void;
    unregisterComplete(callback: (response: TResponse) => void): void;
    emitComplete(response: TResponse): void;
}
