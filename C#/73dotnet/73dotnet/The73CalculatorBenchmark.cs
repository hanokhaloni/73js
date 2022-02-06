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
            TestTheMethod(The73Calculator.usingSwitch);
        }

        [Benchmark]
        public void minus()
        {
            TestTheMethod(The73Calculator.minus);
        }

        [Benchmark]
        public void division()
        {
            TestTheMethod(The73Calculator.division);
        }

        [Benchmark]
        public void stringReplaceParseInt()
        {
            TestTheMethod(The73Calculator.stringReplaceParseInt);
        }

        [Benchmark]
        public void usingModulo()
        {
            TestTheMethod(The73Calculator.usingModulo);
        }

        [Benchmark]
        public void usingObjectMap()
        {
            TestTheMethod(The73Calculator.usingHashMap);
        }

        [Benchmark]
        public void usingIndexerDictionary()
        {
            TestTheMethod(The73Calculator.usingIndexerDictionary);
        }

        [Benchmark]
        public void usingPolynom()
        {
            TestTheMethod(The73Calculator.usingPolynom);
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
