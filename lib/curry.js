module.exports = function curry(func) {
    var count = func.length,
        that = this;

    function checkArguments (args) {
        if (args.length !== 1) {
            throw new RangeError('Only a single argument may be accepted.');
        }
    }
    function collectArgs(args, newArg) {
        args.push(newArg);
        if (args.length == count) {
            return func.apply(that, args);
        } else {
            return function () {
                checkArguments(arguments);
                return collectArgs(args.slice(0), arguments[0]);
            };
        }
    };
    return function () {
        checkArguments(arguments);
        return collectArgs([], arguments[0]);
    }
}
