
import {IApplicationConfig} from './IApplicationConfig';
import { IVersion } from './IVersion';

export interface IApplication<TConfig extends IApplicationConfig = IApplicationConfig> {
    getName(): string;
    getVersion(): IVersion;
    getConfig(): TConfig;
}
