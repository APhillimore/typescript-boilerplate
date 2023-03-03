/** Memoise a function */
export function memoise<T extends (...args: unknown[]) => unknown>(fn: T): T {
    let called = false;
    let result: unknown;
    return ((...args: unknown[]) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    }) as T;
}
