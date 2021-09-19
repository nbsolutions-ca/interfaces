
export interface INBSError<TErrorDetails> extends Error {
    getDetails(): TErrorDetails;
}
