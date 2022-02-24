using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace _73dotnet
{
    [TestClass]
    public class The73CalculatorTest
    {
        static new readonly Dictionary<string, Func<int, int>> testMethods = new Dictionary<string, Func<int, int>>()
        {
            { "UseIf", The73Calculator.useif},
            { "useifeq", The73Calculator.useifeq},
            { "useXor", The73Calculator.useXor},
            { "useArray", The73Calculator.useArray},
            { "usingSwitch", The73Calculator.usingSwitch},
            { "useSubstraction", The73Calculator.useSubstraction},
            { "useDivision", The73Calculator.useDivision},
            { "useStringReplaceParseInt", The73Calculator.useStringReplaceParseInt},
            { "useModulo", The73Calculator.useModulo},
            { "useObjectMap", The73Calculator.useHashMap},
            { "useIndexerDictionary", The73Calculator.useIndexerDictionary},
            { "usePolynom", The73Calculator.usePolynom}

        };

        [DataRow("UseIf")]
        [DataRow("useifeq")]
        [DataRow("useXor")]
        [DataRow("useArray")]
        [DataRow("usingSwitch")]
        [DataRow("useSubstraction")]
        [DataRow("useDivision")]
        [DataRow("useStringReplaceParseInt")]
        [DataRow("useModulo")]
        [DataRow("useObjectMap")]
        [DataRow("useIndexerDictionary")]
        [DataRow("usePolynom")]
        [DataTestMethod]

        public void TestThe73Methods(string methodNameToeTest)
        {
            var method = testMethods[methodNameToeTest];
            TestTheMethod(method);
        }

        public void TestTheMethod(Func<int, int> f)
        {
            for (int i = 0; i < 100000; i++)
            {
                Assert.AreEqual(7, f(3));
                Assert.AreEqual(3, f(7));
            }
        }
    }
}
