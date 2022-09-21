# Project Euler 040 - Champernowne's Constant

An irrational decimal fraction is created by concatenating the positive integers:

    0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d<sub>n</sub> represents the nth digit of the fractional part, find the value of the following expression.

d<sub>1</sub> x d<sub>10</sub> x d<sub>100</sub> x d<sub>1000</sub> x d<sub>10000</sub> x d<sub>100000</sub> x d<sub>1000000</sub>

Information at [Project Euler 040](https://projecteuler.net/problem=40)

## UX

**User Stories**

As a user, I expect the function `champernownesConstant(100)` to return a number.

As a user, I expect the function `champernownesConstant(100)` to return 5.

As a user, I expect the function `champernownesConstant(1000)` to return 15.

As a user, I expect the function `champernownesConstant(1000000)` to return 210.

**Information Architecture**

The function `champernownesConstant(n)` returns a number, where `n` is a number.
