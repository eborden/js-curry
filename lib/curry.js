var curry = (function () {
    function checkArguments (argsCount) {
        if (argsCount !== 1) {
            throw new RangeError('Only a single argument may be accepted.');
        }
    }
    function collectArgs(func, that, argCount, args, newArg) {
        args.push(newArg);
        if (args.length == argCount) {
            return func.apply(that, args);
        } else {
            return function () {
                checkArguments(arguments.length);
                return collectArgs(func, that, argCount, args.slice(0), arguments[0]);
            };
        }
    }
    return function curry (func) {
        var that = this;
        return function () {
            checkArguments(arguments.length);
            return collectArgs(func, that, func.length, [], arguments[0]);
        }
    };
}());
if (typeof module !== 'undefined' && module.exports) {
    module.exports = curry;
}