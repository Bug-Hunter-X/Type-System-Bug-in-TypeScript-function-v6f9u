function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function subtractSafe(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameters must be numbers');
    }
    return a - b;
}

let result = add(5,3);
console.log(result); // 8

result = subtract(5,3);
console.log(result); //2

//This is a subtle bug.  TypeScript's type checking doesn't catch it. 
//The function subtract is not correctly typed and will return a number. 
//However, it will not be able to handle all cases
try{
    result = subtractSafe("5","3");
    console.log(result); //This line will not execute
} catch (e) {
    console.error(e); //This line will execute
}

//Alternatively you can use type guards or conditional types to handle different types in your function more robustly.