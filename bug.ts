function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result = add(5,3);
console.log(result); // 8

result = subtract(5,3);
console.log(result); //2

//This is a subtle bug.  TypeScript's type checking doesn't catch it. 
//The function subtract is not correctly typed and will return a number. 
//However, it will not be able to handle all cases
result = subtract("5","3");
console.log(result); //NaN