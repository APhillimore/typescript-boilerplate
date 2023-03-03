import { memoise } from "../src/memoise";

describe("memoise", () => {
    it("should return the same value", () => {
        const fn = jest.fn();
        const test = memoise(fn);
        test();
        test();
        expect(fn).toHaveBeenCalledTimes(1);
    });
    it("should return the same value", () => {
        const fn1 = jest.fn();
        const fn2 = jest.fn();
        const test = memoise(fn1);
        const test2 = memoise(fn2);
        test();
        test();
        test2();
        test2();
        expect(fn1).toHaveBeenCalledTimes(1);
        expect(fn2).toHaveBeenCalledTimes(1);
    });
});
