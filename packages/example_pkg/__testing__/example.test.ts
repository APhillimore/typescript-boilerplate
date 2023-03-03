import { example } from '../src/example';

describe('testing basic ts jest setup ', () => {
	test('should return 1', () => {
		expect(example()).toBe('hello world');
	});
});
