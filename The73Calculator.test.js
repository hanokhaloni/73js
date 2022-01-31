const The73Calculator = require("./The73Calculator");

describe("Validator", () => {
  //const the73Calculator = new The73Calculator();

  test("useif", () => {
    expect(The73Calculator.useif(3)).toBe(7);
    expect(The73Calculator.useif(7)).toBe(3);
  });

  test("useXor", () => {
    expect(The73Calculator.useXor(3)).toBe(7);
    expect(The73Calculator.useXor(7)).toBe(3);
  });
  test("useArray", () => {
    expect(The73Calculator.useArray(3)).toBe(7);
    expect(The73Calculator.useArray(7)).toBe(3);
  });

});
