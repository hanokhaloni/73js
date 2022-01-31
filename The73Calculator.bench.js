var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const The73Calculator = require("./The73Calculator.js");


// add tests
suite.add(The73Calculator.useif.name, () => {
        expectBehavior(The73Calculator.useif);
    })
    .add(The73Calculator.useXor.name, () => {
        expectBehavior(The73Calculator.useXor);
    })
    .add(The73Calculator.useArray.name, () => {
        expectBehavior(The73Calculator.useArray);
    })
    .add(The73Calculator.usingSwitch.name, () => {
        expectBehavior(The73Calculator.usingSwitch);
    })
    .add(The73Calculator.minus.name, () => {
        expectBehavior(The73Calculator.minus);
    })
    .add(The73Calculator.division.name, () => {
        expectBehavior(The73Calculator.division);
    })
    .add(The73Calculator.stringReplaceParseInt.name, () => {
        expectBehavior(The73Calculator.stringReplaceParseInt);
    })
    .add(The73Calculator.stringReplaceNumber.name, () => {
        expectBehavior(The73Calculator.stringReplaceNumber);
    })
    .add(The73Calculator.usingModulo.name, () => {
        expectBehavior(The73Calculator.usingModulo);
    })
    .add(The73Calculator.usingObjectMap.name, () => {
        expectBehavior(The73Calculator.usingObjectMap);
    })
    .add(The73Calculator.fail.name, () => {
        expectBehavior(The73Calculator.fail);
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

function expectBehavior(f) {
    f(3);
    f(7);
}

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf