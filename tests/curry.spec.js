var curry = require('../lib/curry.js');
describe("Test curry function", function() {
	var func,
		curried;

	beforeEach(function() {
		func = function (x, y, z) {
			return x + y + z;
		};
		curried = curry(func);
	});
	afterEach(function() {
		func = null;
		curried = null;
	});
	
	it("Test pure function", function() {
		expect(func(1, 2, 3)).toBe(6);
	});
	it("Curry returns a function", function() {
		expect(typeof curried === 'function').toBe(true);
	});
	it("Curry returns a function after partial application", function() {
		expect(typeof curried(1) === 'function').toBe(true);
	});
	it("Curry returns a value after total application", function() {
		expect(curried(1)(2)(3)).toBe(6);
	});
	it("Curry invocations have no side effects and do not interact with each other", function() {
		expect(curried(1)(2)(3)).toBe(6);
		expect(curried(2)(4)(8)).toBe(14);
	});
	it("Partial applications can be used multiple times", function() {
		var addyz = curried(1);
		expect(addyz(2)(3)).toBe(6);
		expect(addyz(2)(4)).toBe(7);
	});
	it("Curried functions only accept one argument at a time", function() {
		expect(curried(1, 2999)(2)(3)).toBe(6);
	});
});
