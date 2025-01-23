              //primitive data types
console.log("apple"  + 3);
console.log("apple" * 3); 

let result1 = "10" + 5
console.log(result1)

let result2 = Number("10") + 5
console.log(result2)
// single and double quotes
let singleQuote = 'This is a string.';
let doubleQuote = "This is also a string.";
console.log(singleQuote,doubleQuote); //a space appears between two strings

//Backticks let you include variables easily
let name = "Alice";
let message = `"Hello" , ${name}!`;
console.log(message);

let age = 18; 
let canVote = age >= 18; 
console.log(canVote); // Output: true

//declare a number as BigInt
const bigNum1 = 123456789012345678901234567890n; // Using 'n'
const bigNum2 = BigInt("123456789012345678901234567890"); // Using BigInt()