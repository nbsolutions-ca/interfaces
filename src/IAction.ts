
export interface IAction<TKVArgs, TActionResult, TObserverAPI> {
    setArgument<TK extends keyof TKVArgs>(key: TK, value: TKVArgs[TK]): void;
    getArgument<TK extends keyof TKVArgs>(key: TK): TKVArgs[TK];
    setArguments(args: Partial<TKVArgs>): void;
    getArguments(): TKVArgs;
    getTag(): string;
    notify(observer: TObserverAPI): void;
    execute(): Promise<TActionResult>;
    attachObserver(observer: TObserverAPI): void;
    detachObserver(observer: TObserverAPI): boolean;
    getResult(): TActionResult;
}
