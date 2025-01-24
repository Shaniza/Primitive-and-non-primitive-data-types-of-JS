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


    // Non-Primitve data type
const fun = () => {};
console.log(fun);

//Non-primitive data types

//function
function greet(name){
    console.log("Hello", name + "!")
}
greet("Alice");

//Array
const fruits = ["mango", "banana", "orange"]
console.log(fruits[0])
fruits.push("lemon") //adds element at last
console.log(fruits)
fruits.unshift("berry") //adds element at first
console.log(fruits)
fruits.pop() //deletes last element 
console.log(fruits)
fruits.shift() //deletes first element
console.log(fruits)
console.log(fruits.length); 

//object - a data type of key:"value" pair

const food= { cake: "red velvet", sweets: "rosgolla", pitha: "rosbora" }
console.log(food.cake)//dot notation to access the value with key
console.log(food["cake"])//third bracket to access the value with key

food.drinks = "borhani" //add element 
console.log(food)

food.sweets = "kalojam" //updating value of sweets key
console.log(food)

delete food.cake //delete an element
console.log(food) 
console.log(food.cake)

//nested objects
const food_items= { cake: "red velvet", 
              sweets: "rosgolla",
              pitha: "rosbora" , 
              drinks: {
                healthy:"juice",
                unhealthy: "carbonated drink"
              }
            }

console.log(food_items.drinks.healthy)

//prints keys and values 
console.log(Object.keys(food_items))
console.log(Object.values(food_items))
console.log(Object.values(food))

const obj = { "favorite_snack": "Chips" }; //key in inverted comma
console.log(obj["favorite_snack"]); // Correct: Chips
obj.favorite_snack = "Chocolate";
console.log(obj)
