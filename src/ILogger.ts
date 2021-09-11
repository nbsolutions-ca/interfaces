
import { LogLevel } from './LogLevel';

export interface ILogger {
    getComponent(): string;
    enableDebugLog(state: boolean): void;
    enableVerboseLog(state: boolean): void;
    log(level: LogLevel, message: string): void;
    deprecate(alternative?: string, methodOverride?: string): void;
    deprecateParameterType(argumentLocation: number, deprecatedType: string, alternative?: string): void;
    debug(message: string): void;
    verbose(message: string): void;
    error(message: string): void;
    info(message: string): void;
    warn(message: string): void;
}
