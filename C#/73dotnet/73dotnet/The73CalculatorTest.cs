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
            { nameof(The73Calculator.useif), The73Calculator.useif},
            { nameof(The73Calculator.useifeq), The73Calculator.useifeq},
            { nameof(The73Calculator.useXor), The73Calculator.useXor},
            { nameof(The73Calculator.useArray), The73Calculator.useArray},
            { nameof(The73Calculator.usingSwitch), The73Calculator.usingSwitch},
            { nameof(The73Calculator.minus), The73Calculator.minus},
            { nameof(The73Calculator.division), The73Calculator.division},
            { nameof(The73Calculator.stringReplaceParseInt), The73Calculator.stringReplaceParseInt},
            { nameof(The73Calculator.usingModulo), The73Calculator.usingModulo},
            { nameof(The73Calculator.usingObjectMap), The73Calculator.usingObjectMap},
            { nameof(The73Calculator.usingIndexerDictionary), The73Calculator.usingIndexerDictionary},
            { nameof(The73Calculator.usingPolynom), The73Calculator.usingPolynom},
        };

        [DataRow(nameof(The73Calculator.useif))]
        [DataRow(nameof(The73Calculator.useifeq))]
        [DataRow(nameof(The73Calculator.useXor))]
        [DataRow(nameof(The73Calculator.useArray))]
        [DataRow(nameof(The73Calculator.usingSwitch))]
        [DataRow(nameof(The73Calculator.minus))]
        [DataRow(nameof(The73Calculator.division))]
        [DataRow(nameof(The73Calculator.stringReplaceParseInt))]
        [DataRow(nameof(The73Calculator.usingModulo))]
        [DataRow(nameof(The73Calculator.usingObjectMap))]
        [DataRow(nameof(The73Calculator.usingIndexerDictionary))]
        [DataRow(nameof(The73Calculator.usingPolynom))]
        [DataRow(nameof(The73Calculator.fail))]
        [DataRow(nameof(The73Calculator.noop))]
        [DataTestMethod]
        public void TestThe73Methods(string methodNameToeTest)
        {
            var method = testMethods[methodNameToeTest];
            TestTheMethod(method);
        }

        public void TestTheMethod(Func<int, int> f)
        {
            Assert.AreEqual(7, f(3));
            Assert.AreEqual(3, f(7));
        }
    }
}