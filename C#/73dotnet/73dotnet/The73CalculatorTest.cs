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
            { "minus", The73Calculator.minus},
            { "division", The73Calculator.division},
            { "stringReplaceParseInt", The73Calculator.stringReplaceParseInt},
            { "usingModulo", The73Calculator.usingModulo},
            { "usingObjectMap", The73Calculator.usingHashMap},
            { "usingIndexerDictionary", The73Calculator.usingIndexerDictionary},
            { "usingPolynom", The73Calculator.usingPolynom}

        };

        [DataRow("UseIf")]
        [DataRow("useifeq")]
        [DataRow("useXor")]
        [DataRow("useArray")]
        [DataRow("usingSwitch")]
        [DataRow("minus")]
        [DataRow("division")]
        [DataRow("stringReplaceParseInt")]
        [DataRow("usingModulo")]
        [DataRow("usingObjectMap")]
        [DataRow("usingIndexerDictionary")]
        [DataRow("usingPolynom")]
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
