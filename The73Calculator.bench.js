var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


const The73Calculator = require("./The73Calculator.js");


// add tests
suite.add('useif', () => {
        The73Calculator.useif(3);
        The73Calculator.useif(7);
    })
    .add('useXor', () => {
        The73Calculator.useXor(3);
        The73Calculator.useXor(7);
    })
    .add('useArray', () => {
        The73Calculator.useArray(3);
        The73Calculator.useArray(7);
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf