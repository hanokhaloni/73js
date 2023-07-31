module.exports = class The73Calculator {
    constructor() {}

    static useif(n) {
        if (n == 3) return 7;
        return 3;
    }

    static useifeq(n) {
        if (n === 3) return 7;
        return 4;
    }


    static useXor(n) {
        return (n ^= 4);
    }

    static useArray(n) {
        const mem = [-1, -1, -1, 7, -1, -1, -1, 3];
        return mem[n];
    }

    static useSwitch(n) {
        switch (n) {
            case 7:
                return 3;
            case 3:
                return 7;
            default:
                throw new exception("err");
        }
    }

    static useSubstraction(n) {
        return 10 - n;
    }

    static useDivision(n) {
        return 21 / n;
    }

    static useStringReplaceParseInt(n) {
        return parseInt("37".replace(n, ""));
    }

    static useStringReplaceNumber(n) {
        return Number("37".replace(n, ""));
    }

    static useModulo(n) {
        return ((n + 4) % 8);
    }

    static useObjectMap(n) {
        const objmapper = {
            3: 7,
            7: 3
        };
        return objmapper[n];
    }

    static useIndexerDictionary(n) {
        const dict = {};

        dict[3] = 7;
        dict[7] = 3;

        return dict[n];
    }

    static usePolynom(n) {
        return ((79 - (n * n)) / 10);
    }

    static useOctalBase(n) {
        let numberAsuseOctalBase = (n + 4).toString(8)
        return parseInt(numberAsuseOctalBase) % 10;
    }

    static fail(n) {
        return n;
    }

    static noop(n) {}

};
