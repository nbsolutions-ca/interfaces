
export type IAbstractConstructor<T = any, TArgs extends any[] = any> = abstract new (...args: TArgs) => T;
