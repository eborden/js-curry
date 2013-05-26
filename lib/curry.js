function curry(func) {
    var memo = {
        count: func.length,
        func: func,
        that: this
    };

    function collectArgs(args, newArg) {
        args.push(newArg);
        if (args.length == memo.count) {
            return memo.func.apply(memo.that, args);
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