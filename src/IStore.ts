
export interface IStore<TStoreObserver> {
    isInterestedInAction(actionName: string): boolean;
    attachObserver(observer: TStoreObserver): void;
    detachObserver(observer: TStoreObserver): void;
    notify(observer: TStoreObserver): void;
}
