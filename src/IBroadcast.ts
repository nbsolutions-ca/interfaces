
import { IDisposable } from './IDisposable';
import { IObservable } from './IObservable';

export interface IBroadcast<TObserver, TData = void> extends IObservable<TObserver>, IDisposable {
    notify(data: TData): void;
}
