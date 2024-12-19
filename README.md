# Type System Bug in TypeScript function
This example demonstrates a subtle bug in TypeScript's type system where type checking fails to catch type errors in functions that can handle multiple types.

## Bug Description
The `subtract` function is incorrectly typed. While it's designed to work with numbers, it doesn't explicitly prevent other types from being passed in. The TypeScript compiler will not throw any type errors. 

## Reproduction Steps
1. Run the TypeScript code in `bug.ts`. 
2. Observe that the function works correctly with numbers but returns `NaN` when strings are passed. TypeScript should have caught this type error.

## Solution
The solution file `bugSolution.ts` demonstrates how to fix this type error by explicitly defining the type constraints.

## Additional Notes
This bug highlights a limitation of TypeScript's type system when dealing with functions that handle multiple types without explicit type guards or more robust type checking.