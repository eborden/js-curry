JavaScript Curry
========

Many JavaScript curry examples are actually examples of partial application. This module implements true curry behavior in JavaScript.

True curry behavior means only accepting a single argument at a time and only executing upon application of all arguments. [[citation](http://en.wikipedia.org/wiki/Currying)]

```JavaScript
curried = curry(function (a, b, c) {
	return a + b + c;
});
curried(1)(2)(3); //6

curriedOne = $curried(1);
curriedOne(2)(3); //6
```

Reverse Currying is also possible
```Javascript
//verbose
curried = curry(function (a, b, c) {
	return a + b + c;
}, true);

//single argument convenience
curried = curry.r(function (a, b, c) {
	return a + b + c;
});

curried('a')('b')('c'); //'cba'
```

Tests
--------

Tests are written in jasmine. They can be run at http://tryjasmine.com/

To run from the command line:

    npm install jasmine-node
    jasmine-node path/to/js-curry


Benchmark
----------

http://jsperf.com/js-curry-bench/3
