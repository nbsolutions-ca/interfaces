
import { IObservable } from './IObservable';

export interface IBroadcast<TObserver, TData = void> extends IObservable<TObserver> {
    notify(data: TData): void;
}
