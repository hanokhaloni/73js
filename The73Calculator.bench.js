// Import the benchtable module
var BenchTable = require('benchtable');

// Create benchtable suite
var suite = new BenchTable();

const The73Calculator = require("./The73Calculator.js");


// add tests
suite.add(The73Calculator.useif.name, () => {
        expectBehavior(The73Calculator.useif);
    })
    .add(The73Calculator.useifeq.name, () => {
        expectBehavior(The73Calculator.useifeq);
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
    .add(The73Calculator.usingPolynom.name, () => {
        expectBehavior(The73Calculator.usingPolynom);
    })
    .add(The73Calculator.fail.name, () => {
        expectBehavior(The73Calculator.fail);
    })
    .add(The73Calculator.noop.name, () => {
        expectBehavior(The73Calculator.noop);
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        var report = [];
        for (var i = 0; i < this.length; i++) {
            //console.log(this[i]);
            var item = {};
            item.name = this[i].name;
            item.hz = this[i].hz;
            item.deviation = this[i].deviation;
            //console.log(this[i].stats);
            report.push(item);
        }

        report.sort((a, b) => (b.hz - a.hz));
        report.forEach(r => console.log(r.name + " - " + r.hz));
        console.log('Fastest is ' + this.filter('fastest').map('name'));

        console.log('Slowest is ' + this.filter('slowest').map('name'));
    })
    // run async
    .run({ 'async': true });

function expectBehavior(f) {
    for (var i = 0; i < 100000; i++) {
        f(3);
        f(7);
    }
}

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf