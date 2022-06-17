
import {INBSObject} from './INBSObject';

export interface IURLBuilder extends INBSObject {
    setPrefix(prefix: string): IURLBuilder;
    setService(service: string): IURLBuilder;
    setProtocol(protocol: string | null): IURLBuilder;
    setHost(host: string | null): IURLBuilder;
    sertPort(port: number | null): IURLBuilder;
    setEndpoint(endpoint: string | null): IURLBuilder;
    setEndpointSuffix(suffix: string | null): IURLBuilder;
    setParams(params: Record<string, string> | null): IURLBuilder;
    setHash(hash: string | null): IURLBuilder;
    build(): string;
}
