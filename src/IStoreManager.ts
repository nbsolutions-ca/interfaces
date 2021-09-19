
import { IAction } from './IAction';
import {IStore} from './IStore';

export interface IStoreManager {
    add(store: IStore<any>): void;
    get(name: string): IStore<any>;
    remove(store: IStore<any>): void;
    onActionInitialize(action: IAction<any, any, any>): void;
}
