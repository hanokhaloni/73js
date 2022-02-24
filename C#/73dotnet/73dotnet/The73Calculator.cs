using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _73dotnet
{
    public class The73Calculator
    {
        static Hashtable hashtable = new Hashtable(){
                {3,7},
                {7,3}
            };

        static int[] p = { -1, -1, -1, 7, -1, -1, -1, 3 };

        static Dictionary<int, int> dictionary = new Dictionary<int, int>(){
                {3,7},
                {7,3 }
            };


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
            return p[n];
        }

        public static int useSwitch(int n)
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

        public static int useSubstraction(int n)
        {
            return 10 - n;
        }

        public static int useDivision(int n)
        {
            return 21 / n;
        }

        public static int useStringReplaceParseInt(int n)
        {
            return int.Parse("37".Replace(n.ToString(), ""));
        }


        public static int useModulo(int n)
        {
            return ((n + 4) % 8);
        }

        public static int useHashMap(int n)
        {
            return (int)hashtable[n];
        }

        public static int useIndexerDictionary(int n)
        {

            return dictionary[n];
        }

        public static int usePolynom(int n)
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
