
export interface IObservable<TObserver> {
    attachObserver(observer: TObserver): void;
    detachObserver(observer: TObserver): void;
}
