
import {IObservable} from './IObservable';

export interface ISubject<TObserver, T = void> extends IObservable<TObserver> {
    notify(observer: TObserver, data: T): void;
}
