
import { ISerializable } from "./ISerializable";
export type TransportableData = ISerializable<string | Blob> | string | Blob;
