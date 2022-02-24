const The73Calculator = require("./The73Calculator.js");


const testMEthods = [
    The73Calculator.useif,
    The73Calculator.useifeq,
    The73Calculator.useXor,
    The73Calculator.useArray,
    The73Calculator.useSwitch,
    The73Calculator.useSubstraction,
    The73Calculator.useDivision,
    The73Calculator.useStringReplaceParseInt,
    The73Calculator.useStringReplaceNumber,
    The73Calculator.useModulo,
    The73Calculator.useObjectMap,
    The73Calculator.useIndexerDictionary,
    The73Calculator.usePolynom,
    The73Calculator.useOctalBase
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