using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Diagnosers;
using BenchmarkDotNet.Order;
using BenchmarkDotNet.Running;
using System;

namespace _73dotnet
{
    [MemoryDiagnoser]
    [Orderer(SummaryOrderPolicy.FastestToSlowest, MethodOrderPolicy.Declared)]
    [HardwareCounters(
        HardwareCounter.BranchMispredictions,
        HardwareCounter.BranchInstructions)]
    public class The73CalculatorBenchmark
    {

        int NumberOfItems = 100000;

        [Benchmark]
        public void useif()
        {
            TestTheMethod(The73Calculator.useif);
        }

        [Benchmark]
        public void useifeq()
        {
            TestTheMethod(The73Calculator.useifeq);
        }

        [Benchmark]
        public void useXor()
        {
            TestTheMethod(The73Calculator.useXor);
        }

        [Benchmark]
        public void useArray()
        {
            TestTheMethod(The73Calculator.useArray);
        }

        [Benchmark]
        public void usingSwitch()
        {
            TestTheMethod(The73Calculator.useSwitch);
        }

        [Benchmark]
        public void useSubstraction()
        {
            TestTheMethod(The73Calculator.useSubstraction);
        }

        [Benchmark]
        public void useDivision()
        {
            TestTheMethod(The73Calculator.useDivision);
        }

        [Benchmark]
        public void useStringReplaceParseInt()
        {
            TestTheMethod(The73Calculator.useStringReplaceParseInt);
        }

        [Benchmark]
        public void useModulo()
        {
            TestTheMethod(The73Calculator.useModulo);
        }

        [Benchmark]
        public void useObjectMap()
        {
            TestTheMethod(The73Calculator.useHashMap);
        }

        [Benchmark]
        public void useIndexerDictionary()
        {
            TestTheMethod(The73Calculator.useIndexerDictionary);
        }

        [Benchmark]
        public void usePolynom()
        {
            TestTheMethod(The73Calculator.usePolynom);
        }

        [Benchmark]
        public void fail()
        {
            TestTheMethod(The73Calculator.fail);
        }

        [Benchmark]
        public void noop()
        {
            TestTheMethod(The73Calculator.noop);
        }


        public void TestTheMethod(Func<int, int> f)
        {
            for (int i = 0; i < NumberOfItems; i++)
            {
                f(3);
                f(7);
            }
        }

        static void Main(string[] args)
        {
            var summary = BenchmarkRunner.Run<The73CalculatorBenchmark>();
        }
    }
}
