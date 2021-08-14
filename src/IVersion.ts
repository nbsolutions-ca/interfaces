import { INBSObject } from './INBSObject';
import {IComparable} from '@nbsolutions/util';

export interface IVersion extends INBSObject, IComparable<IVersion> {
    getMajor(): number;
    getMinor(): number;
    getPatch(): number;
    isPrerelease(): boolean;
    getPrereleaseLabel(): string;
    getPrereleaseBuild(): number;
    toString(): string;
}
