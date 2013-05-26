function curry(func) {
    var count = func.length,
        that = this;

    function collectArgs(args, newArg) {
        args.push(newArg);
        if (args.length == count) {
            return func.apply(that, args);
        } else {
            return function () {
                return collectArgs(args.slice(0), arguments[0]);
            };
        }
    };
    return function () {
        return collectArgs([], arguments[0]);
    }
}