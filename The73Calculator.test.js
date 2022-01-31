const The73Calculator = require('./The73Calculator');

describe("Validator", () => {
    //const the73Calculator = new The73Calculator();
  
    test('useif', () => {
        expect(The73Calculator.useif(3)).toBe(7);
        expect(The73Calculator.useif(7)).toBe(3);

      });
});