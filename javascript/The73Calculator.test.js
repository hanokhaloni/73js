const The73Calculator = require("./The73Calculator.js");


const testMEthods = [
    The73Calculator.useif,
    The73Calculator.useifeq,
    The73Calculator.useXor,
    The73Calculator.useArray,
    The73Calculator.usingSwitch,
    The73Calculator.minus,
    The73Calculator.division,
    The73Calculator.stringReplaceParseInt,
    The73Calculator.stringReplaceNumber,
    The73Calculator.usingModulo,
    The73Calculator.usingObjectMap,
    The73Calculator.usingIndexerDictionary,
    The73Calculator.usingPolynom
];

describe.each(testMEthods)('With params for %s', (methodUnderTest) => {
    it(`${methodUnderTest.name} test`, () => {
        expectBehavior(methodUnderTest);
    });
});

function expectBehavior(f) {
    expect(f(3)).toBe(7);
    expect(f(7)).toBe(3);
}