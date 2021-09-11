
export type IConcreteConstructor<T = any, TArgs extends any[] = any> = new (...args: TArgs) => T;
