import { INBSObject } from './INBSObject';
import { INetworkResponse } from './INetworkResponse';

export interface INetworkResponseFactory extends INBSObject {
    create(xhr: XMLHttpRequest): INetworkResponse<any>;
}
