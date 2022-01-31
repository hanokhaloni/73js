module.exports = class the73Calculator {
    constructor() {}

    static useif(n) {
        if (n === 3) return 7;
        return 3;
    }

    static useXor(n) {
        return (n ^= 4);
    }

    static useArray(n) {
        const mem = [-1, -1, -1, 7, -1, -1, -1, 3];
        return mem[n];
    }

    static usingSwitch(n) {
        switch (n) {
            case 7:
                return 3;
            case 3:
                return 7;
            default:
                throw new exception("err");
        }
    }

    static division(n) {
        return 21 / n;
    }

    static stringReplace(n) {
        return "37".replace(n, "");
    }
};