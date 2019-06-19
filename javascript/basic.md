- Primarily client side, does not have to run through a server (like PHP or .NET does) to work - only needs the browser in order to run

#### General Notes, Vocab

- Modulo symbol `%`
- `true` = `1`  
  `false` = `0`
- `'use strict'` statement: forces a strict method of linting 

#### Code reference

```javascript
prompt("Enter your name", "Enter Name"); // returns what is typed into the input
confirm("Are you sure you want to quit?"); // 'ok' returns true, 'cancel' returns false

console.warn('warning!'); 
console.error('error!');

Math.round(); // return nearest integer
Math.ceil(); // return nearest integer rounded UP
Math.floor(); // return nearest integer rounded DOWN

Math.abs(); // return absolute value
Math.pow(x, y); // return value of x to the power of y

Math.min(a,b,c,d,e); // return lowest value in a list of arguments
Math.max(f,g,h,i,j); // return highest value in a list of arguments
```

## Primitive Data Types

- String, number, boolean, null\*, undefined\*
  - \***Null** means a value does not exist
  - \***Undefined** means something (a variable) has not been defined

Any **expression** in Javascript will return a value (`2 + 2` returns `4`), and that value will have a type.  
A value's **type** tells us what kind of 'thing' it is.

The expression `2 + "2"` returns `"22"` -- it is concatenating the two values and returns a string

`typeof(10 > 2)` returns `boolean`  
`typeof(a)` returns `ReferenceError: undefined` since value 'a' has not been defined


## Variables 

- Variable names cannot start with a number, contain spaces or punctuation marks (except `_` or `$`), or use a word that is already reserved for something else.
- Use special keyword `var` to name the variable (use camel case), and then assign the variable a value.

**Keywords and Reserved words**:   
`break, case, catch, continue, debugger, default, delete, do, false, finally, implements, in, instanceof, interface, let, new, package, private, protected, public, return, static, switch, this, throw, try, typeof, void, while, with, yield`

## Control Flow

### If/Else

- Using **control flow** allows us to run code only under certain conditions
- Uses code in a non-linear fashion
- If/Else statements = one of the most common types of control flow. 
  - Allow us to run code only **if** a certain condition is first met & to do something **else** if that condition is not met.


### Switch
```javascript
switch (expressionOrArgument) {
  case exampleOne:
    console.log('expressionOrArgument === exampleOne');
    break;
  case exampleTwo:
    console.log('expressionOrArgument === exampleTwo');
    break;
  default:
    // this code will run if no cases are met
    break;
}
```

### Loops

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


#### For..in vs For..of Loops

                 | `for..in` | `for..of`
---------------- | --------- |  -------
applies to:      | enumerable properties|iterable collections
use with objects?|yes|no
use with arrays? |possible but not recommended|yes
use with strings?|possible but not recommended|yes

**TL;DR:** use `for..in` for object properties, `for..of` for array values

[source](https://bitsofco.de/for-in-vs-for-of/)

## Functions

```js
// declare new function
function newFunction(parameter) {
  // run code
}
// call or invoke the function by passing an argument
newFunction(argument);
```

- Ways of declaring functions:
  1. Function Declaration
  2. Function Expression (anonymous or named)
- What's the difference? 
  - Functions declarations load before any code is executed, vs function expressions only load only when the interpreter reaches that line of code where it is declared

#### Function Declaration

```js
myFunction();

// function declaration
function myfunction() {
  // ..
};
```

#### Function Expression

```js
myFunction(); // error! myFunction is not a function

// function operator (anonymous function)
var myFunction = function() {
  // ..
};
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

## Coding Conventions

- Small details are important especially when other people will be reading and working with the code
- One way to help write code in a standard way is to use a **linting tool** like JSLint.

##### Questions for Later

- Vocab: Parameter, argument, expression, namespacing
