var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

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
    .add(The73Calculator.useSubstraction.name, () => {
        expectBehavior(The73Calculator.useSubstraction);
    })
    .add(The73Calculator.useDivision.name, () => {
        expectBehavior(The73Calculator.useDivision);
    })
    .add(The73Calculator.useStringReplaceParseInt.name, () => {
        expectBehavior(The73Calculator.useStringReplaceParseInt);
    })
    .add(The73Calculator.useStringReplaceNumber.name, () => {
        expectBehavior(The73Calculator.useStringReplaceNumber);
    })
    .add(The73Calculator.useModulo.name, () => {
        expectBehavior(The73Calculator.useModulo);
    })
    .add(The73Calculator.useObjectMap.name, () => {
        expectBehavior(The73Calculator.useObjectMap);
    })
    .add(The73Calculator.useIndexerDictionary.name, () => {
        expectBehavior(The73Calculator.useIndexerDictionary);
    })
    .add(The73Calculator.usePolynom.name, () => {
        expectBehavior(The73Calculator.usePolynom);
    })
    .add(The73Calculator.useOctalBase.name, () => {
        expectBehavior(The73Calculator.useOctalBase);
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