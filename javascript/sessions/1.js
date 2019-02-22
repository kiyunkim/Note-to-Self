var str = new String('string');
// str has properties from the String object
// inheritance!

/* ------------------------------------------------ */
// `let` vs `var`

// var does NOT have block scope
{ // var in a block
  var x = 2;
}
// x can be used here
// ------

{ // let in a block
  let x = 2;
}
// x cannot be used here
// ------

// var can be redeclared
var x = 10;
// x = 10
{
  var x = 2;
  // x = 2 
}
// x = 2
// ------

var x = 10;
// x = 10
{
  let x = 2;
  // x = 2
}
// x = 10
// ------

var x = 10;
let x = 2; // not allowed - in the same block
// ------

// redeclaring let in same scope or block is not allowed
let x = 2;
{
  let x = 4; // allowed
  let x = 5; // not allowed
}
// ------

// loops
var i = 1;
for (var i = 0; i < 5; i++) {
  // ..
}
// i = 10
// ------

let i = 5;
for (let i = 0; i < 10; i++) {
  // ..
}
// i = 5
// ------

// global variable
var car = 'bmw';
// can use window.car
let car = 'kia';
// can't use window.car
// ------

// hoisting
// can use car here
// var variables are hoisted to top
var car;
// cant use car here
let car;

/* ------------------------------------------------ */
// `const`

// similar to `let`, but cannot be reassigned
const car = 'car';
car = 'vehicle'; // error
// ------

// block scope
var x = 2;
{
  const x = 10;
  // x = 10 here
}
// x = 2 here
// ------

// nope:
const x;
x = 1;
// yep:
const x = 1;
// ------

// constant reference to a value. not a constant value
// aka can change properties, but not primitive values
const car = {
  color: 'white'
};
car.color = 'red'; // can change property
car.type = 'bmw'; // can add property
// nope:
car = {
  color: 'black'
};

// same with array
const arr = [1,2,3];
arr[0] = 2; // ok
arr.push(4); // ok
arr = [0,3,4]; // error
// ------

// redeclaring existing var or let variable is not allowed
var x = 2;
const x = 5; // not allowed
{
  let x = 4;
  const x = 10; // not allowed
}
// ------

// same hoisting rules as `let`

/* ------------------------------------------------ */

// hoisting

a(); // a is not a function
var a = function() {
  console.log('hello world');
}
a(); // hello world

// for the first a()
// var a;               < this was hoisted
// a = function() {..   < but not this

/* ------------------------------------------------ */

// falsy
console.log(!!false);      // false
console.log(!!undefined);  // false
console.log(!!0);          // false
console.log(!!'');         // false
console.log(!!null);       // false
console.log(!!NaN);        // false

console.log(!!'0');        // true bc length of string

/* ------------------------------------------------ */

// object parameters:
// pass by reference or pass by value ?
var a = 1;
function test(b) {
  return b + 1;
}
test(a);
console.log(a); // 1
// primitive types are passed by value

var a = [1,2,3];
function test(b) {
  b[0] = 2;
  return b;
}
test(a);
console.log(a); // [2,2,3]

// objects are passed by reference


// how to make it so a = [1,2,3] ?
// prototype?