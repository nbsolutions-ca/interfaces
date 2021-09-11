
import { IConstructor } from './IConstructor';
import { ILogger } from './ILogger';

export interface ILoggerManager {
    getLogger(obj: IConstructor): ILogger;
}
