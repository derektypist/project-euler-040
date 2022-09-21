# Project Euler 040 - Champernowne's Constant

An irrational decimal fraction is created by concatenating the positive integers:

    0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d<sub>n</sub> represents the nth digit of the fractional part, find the value of the following expression.

d<sub>1</sub> x d<sub>10</sub> x d<sub>100</sub> x d<sub>1000</sub> x d<sub>10000</sub> x d<sub>100000</sub> x d<sub>1000000</sub>

Information at [Project Euler 040](https://projecteuler.net/problem=40)

## UX

**Getting Started**

Enter a whole number between 100 and 1000000, without leading zeros such as 0100 and click on the Submit Button.  You will see the value of the expression, unless you have made an invalid input.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 100 or greater than 1000000
- Including leading zeros (e.g. 0100)
- Entering a number, but it is not an integer

As a user, I expect the function `champernownesConstant(100)` to return a number.

As a user, I expect the function `champernownesConstant(100)` to return 5.

As a user, I expect the function `champernownesConstant(1000)` to return 15.

As a user, I expect the function `champernownesConstant(1000000)` to return 210.

User Stories on function `champernownesConstant(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 040](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-40-champernownes-constant)

**Information Architecture**

The function `champernownesConstant(n)` returns a number, where `n` is a number.

## Features

Allows the user to enter a number as getting the value of the expression.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.1 and Google Fonts.

## Testing

Ensure all user stories have been met.

