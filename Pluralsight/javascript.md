# Javascript

- Developed by Netscape to create products and applications that run in the browser
- Primarily client side, does not have to run through a server (like PHP or .NET) to work - only needs the browser in order to run
- Fully featured language but originally designed as a **scripting language** (language used to communicate with an existing application)

## General Notes

- Less lines = smaller file

## Code reference

```javascript

console.log("hello world"); // logs the string to the console
console.warn('warning!'); // warning is echoed out in the console
console.error('error!');


```

## Primitive Data Types

- Types of data used in JavaScript that serve as the basic building blocks of every program.
- String, number, boolean, null\*, undefined\*

  *\*These data types are weird.*
  
  *\***Null** means a value does not exist*  
  *\***Undefined** means something (a variable) has not been defined*

Any **expression** in Javascript will return a value (`2 + 2` returns `4`), and that value will have a type.  
A value's **type** tells us what kind of 'thing' it is.

`2 + "2"` returns `22` -- it is concatenating the two values and returns a string

`typeof(10 > 2)` returns `boolean`  
`typeof(a)` returns `undefined` since value 'a' has not been defined


Variables

- 
