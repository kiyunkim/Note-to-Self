# Javascript

- Developed by Netscape to create products and applications that run in the browser
- Primarily client side, does not have to run through a server (like PHP or .NET) to work - only needs the browser in order to run
- Fully featured language but originally designed as a **scripting language** (language used to communicate with an existing application)

### General Notes, Vocab

- Modulo symbol `%`
- `true` = `1`  
  `false` = `0`
- function/method
- parameter/argument

### Code reference

```javascript
prompt("Enter your name", "Enter Name"); // returns what is typed into the input
confirm("Are you sure you want to quit?"); // 'ok' returns true, 'cancel' returns false

console.log("hello world");
console.warn('warning!'); 
console.error('error!');

Math.random(); // generates random number between 0 and 1
Math.round(); // round to a whole number
```

## Primitive Data Types

- Types of data used in JavaScript that serve as the basic building blocks of every program.
- String, number, boolean, null\*, undefined\*

  *\*These data types are weird.*
  
  *\***Null** means a value does not exist*  
  *\***Undefined** means something (a variable) has not been defined*

Any **expression** in Javascript will return a value (`2 + 2` returns `4`), and that value will have a type.  
A value's **type** tells us what kind of 'thing' it is.

`2 + "2"` returns `"22"` -- it is concatenating the two values and returns a string

`typeof(10 > 2)` returns `boolean`  
`typeof(a)` returns `ReferenceError: undefined` since value 'a' has not been defined


## Variables 

- Variables allow us to store a reference to a value to be referred to later. When we create a new variable, we are **declaring** it, which means our code now recognizes it as a 'thing.' 
- Variables cannot start with a number, contain spaces or punctuation marks (except `_` or `$`), or use a word that is already reserved for something else.
- Use special keyword `var` to name the variable (use CAML case), and then assign the variable a value.

**Keywords and Reserved words**: `break, case, catch, continue, debugger, default, delete, do, else, false, finally, for, function, if, implements, in, instanceof, interface, let, new, null, package, private, protected, public, return, static, switch, this, throw, true, try, typeof, var, void, while, with, yield`

## Control Flow

- Using **control flow** allows us to run code only under certain conditions
- Uses code in a non-linear fashion

#### If/Else
- If/Else statements are one of the most common types of control flow. They allow us to run code only **if** a certain condition is first met, and we can tell our code to do something **else** if that condition is not met.


#### Switch
```javascript
switch (expressionOrArgument) {
  case exampleOne:
    // if expressionOrArgument === exampleOne, this code will run
    break;
  case exampleTwo:
    // if expressionOrArgument === exampleTwo, this code will run
    break;
  default:
    // this code will run if no cases are met
    break;
}
```

### Loop

#### For Loops
- Loops through a block of code until an original condition is no longer true

```javascript
// print numbers 1 through 10 in the console
for (i = 0; i <= 10; i++) {
  // the block of code to run in loop
  console.log(i);
}
```
- **Initial expression** specified after the `for` keyword within paranthesis.
  1. Create variable with its value (at i = 0)
  2. Code runs while this condition is true (i <= 10)
  3. Update the value after checking it is true (add by 1, i++)

#### Do While Loops
- 'Do X while Y is true'
```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 11);


// or just the while loop:
var i = 0;
while(i < 11) {
  console.log(i);
  i++;
}
```
> The difference above: when `i` is initially 11, it will log in the console using the do loop but not the second because it checks the condition (`i < 11`) before logging.

- Useful when you don't know how many times you need the loop to run

## Functions
```js
// declare new function
function newFunction(parameter) {
  // run code
}
// call or invoke the function by passing an argument
newFunction(argument);
```
## Arrays 
```js
// arrays start at 0

var languages = ['french', 'english', 'korean']; 
languages[1] // returns 'english'
languages[3] = 'japanese'; // assign fourth string in the 3rd position
languages.push('chinese'); // assigns to the last position in the array
// so now languages is..
var languages = ['french', 'english', 'korean', 'japanese', 'chinese'];

languages.length // returns 5

// loop through array
function loopLanguages() {
  for(var i = 0; i < languages.length; i++) {
    console.log("I speak "+ languages[i]);
  }
}
```

## Objects

An **object** is a collection of **properties**, which are described in the form of **key/value** pairs. In other words, key/value pairs make up a property and its value, which is assigned to an object. We can use objects to model "things" using code.

```js
// OBJECT LITERAL NOTATION
var myObject = {
  key: value,
  property: anotherValue 
};

var myCoffee = {
  flavor: "french vanilla",
  temperature: "hot",
  milk: true,
  sugar: 3
  };
```
Objer literals define and create a single object, referred as an **instance** of an object.

### Methods

A function in an object (a property with a function as the value). For example, in `console.log()`, log is a method of the `console` object.

When a function is associated only with a specific object, using the term method is more specific since it implies association with an object, and not a global function.

```js
var myCoffee = {
  flavor: "french vanilla",
  temperature: "hot",
  milk: true,
  sugar: 3
  reheat: function() {
    if (myCoffee.temperature === "cold") {
      myCoffee.temperature = "hot"; // set value back to hot if coffee temperature is cold
    }
  }
};

myCoffee.temperature = "cold"; // assign new value to property
myCoffee['temperature'] = "cold"; // another way to assign values to properties

myCoffee.reheat();

reheat(); // won't work because it's a method and requires and object it is associated to
```

### Object Constructer
