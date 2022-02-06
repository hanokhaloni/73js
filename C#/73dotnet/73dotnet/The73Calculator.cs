using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _73dotnet
{
    class The73Calculator
    {
        public static int useif(int n)
        {
            if (n == 3) return 7;
            return 3;
        }

        public static int useifeq(int n)
        {
            return (0 == n.CompareTo(3)) ? 7 : 3;
        }


        public static int useXor(int n)
        {
            return (n ^= 4);
        }

        public static int useArray(int n)
        {
            int[] p = { -1, -1, -1, 7, -1, -1, -1, 3 };
            return p[n];
        }

        public static int usingSwitch(int n)
        {
            switch (n)
            {
                case 7:
                    return 3;
                case 3:
                    return 7;
                default:
                    throw new Exception("err");
            }
        }

        public static int minus(int n)
        {
            return 10 - n;
        }

        public static int division(int n)
        {
            return 21 / n;
        }

        public static int stringReplaceParseInt(int n)
        {
            return int.Parse("37".Replace(n.ToString(), ""));
        }


        public static int usingModulo(int n)
        {
            return ((n + 4) % 8);
        }

        public static int usingObjectMap(int n)
        {
            //    const objmapper = {
            //    3: 7,
            //    7: 3
            //    };
            //return objmapper[n];
            return 5;
        }

        public static int usingIndexerDictionary(int n)
        {
            //const dict = { };

            //dict[3] = 7;
            //dict[7] = 3;

            //return dict[n];
            return 5;
        }

        public static int usingPolynom(int n)
        {
            return ((79 - (n * n)) / 10);
        }

        public static int fail(int n)
        {
            return n;
        }

        public static int noop(int n)
        {
            return 0;
        }

    }
}
