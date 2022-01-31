const The73Calculator = require("./The73Calculator.js");

describe("The73Calculator", () => {
    //const the73Calculator = new The73Calculator();

    // const testMEthods = [
    //     The73Calculator.useif,
    //     The73Calculator.useXor,
    //     The73Calculator.useArray,
    //     The73Calculator.usingSwitch,
    //     The73Calculator.minus,
    //     The73Calculator.division,
    //     The73Calculator.stringReplace
    // ];
    test(The73Calculator.useif.name, () => {
        expectBehavior(The73Calculator.useif);
    });

    test(The73Calculator.useXor.name, () => {
        expectBehavior(The73Calculator.useXor);
    });
    test(The73Calculator.useArray.name, () => {
        expectBehavior(The73Calculator.useArray);
    });
    test(The73Calculator.usingSwitch.name, () => {
        expectBehavior(The73Calculator.usingSwitch);
    });
    test(The73Calculator.minus.name, () => {
        expectBehavior(The73Calculator.minus);
    });
    test(The73Calculator.division.name, () => {
        expectBehavior(The73Calculator.division);
    });
    test(The73Calculator.stringReplaceParseInt.name, () => {
        expectBehavior(The73Calculator.stringReplaceParseInt);
    });
    test(The73Calculator.stringReplaceNumber.name, () => {
        expectBehavior(The73Calculator.stringReplaceNumber);
    });

    function expectBehavior(f) {
        expect(f(3)).toBe(7);
        expect(f(7)).toBe(3);
    }


});