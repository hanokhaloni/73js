# 73js
In 7, out 3, in 3 - out 7. other than that? Anything goes!

## What?

/* This is a question that I was asked in an interview:
Implement a function that gets an integer n and does the following:
1. if n is 3 -> return 7.
2. else if n is 7 -> return 3.
3. otherwise return any number you like (undefined behavior).

Also describe what's the runtime and space complexity of each way.

So first I gave the trivial way of using if-else statement - and said it's O(1) run-time + space complexity. Then the interviewer said: "what if you can't use if statements (including switch-case and other if statements similarities)?"

So I suggested using bitwise operations: return n^=4. Said that it's O(1) run-time + space complexity. Then the interviewer said: "what if you can't use bitwise operations?"

So I suggested using an array like this:

int mem[8] = {-1, -1, -1, 7, -1, -1, -1, 3}; 
return mem[n];               
Said it's O(1) run-time + space complexity, how ever it might be non-efficient if we have large numbers instead of 3 and 7.

Then the interviewer said: "what if you can't use arrays?" - and here I got stuck.

It seems like there is a fourth way... any suggestions? */


## Why?

That's actually a good question. I guess that discovery does not happen with a set target in mind!

# How to run?

from console, install with npm:
```
npm install
```

then you can just run the tests
```
npm test
```

if you want to benchmark use
```
npm run bench
```
