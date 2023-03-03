export type Maybe<T> = T | null;
export type ErrorResult<E> = [unknown, E];
export type SuccessResult<T, E> = [T, E];
export type Result<T, E extends Error> = SuccessResult<T, null> | ErrorResult<E>;

type Throwable<G> = (...args: unknown[]) => G | never;

/** Golang style [result, error] tuple for simple, transparent error handling*/
export function throwToResult<G>(fn: Throwable<G>): Result<G, Error> {
	try {
		const res = fn();
		return [res, null];
	} catch (e) {
		if (e instanceof Error) {
			return [null, e];
		}
		return [null, new Error('unknown error')];
	}
}

/** Golang style [result, error] tuple for simple, transparent error handling*/
export async function throwToResultAsync<G>(fn: Throwable<G>): Promise<Result<G, Error>> {
	try {
		const res = await fn();
		return [res, null];
	} catch (e) {
		if (e instanceof Error) {
			return [null, e];
		}
		return [null, new Error('unknown error')];
	}
}
