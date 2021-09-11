
import {ComparisonResult} from './ComparisonResult';

export interface IComparable<T> {
    compare(value: T): ComparisonResult;
}
