# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: a stack overflow caused by an uncontrolled recursive function.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows a corrected version that avoids the stack overflow.

The bug is caused by the recursive function `foo` not having a proper base case for large values of 'a'. This leads to an excessive number of recursive calls, resulting in a stack overflow error.