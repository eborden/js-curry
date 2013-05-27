JavaScript Curry
========

Many JavaScript curry examples are actually examples of partial application. I have attempted to implement true curry behavior in JavaScript.

True curry behavior means only accepting a single argument at a time and only executing upon application of all arguments.

```JavaScript
$curried = curry(function (a, b, c) {
	return a + b + c;
});
$curried(1)(2)(3); //6

$curriedOne = $curried(1);
$curriedOne(2)(3); //6
```

Tests
--------

Tests are written in jasmine. They can be run at http://tryjasmine.com/