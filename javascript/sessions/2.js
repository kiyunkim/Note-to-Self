/* ---------------------------------- */
/* From Session 1:
/* ---------------------------------- */
var a = [1,2,3];

function test(b) {
  b[0] = 2;
  return b;
}
test(a);
console.log(a); // [2,2,3]

// objects are passed by reference
// how to make it so a = [1,2,3] ?

// https://stackoverflow.com/questions/7574054/javascript-how-to-pass-object-by-value
function test(b){
  c = Object.create(b); // c prototype points to b
  c[0] = 2;
  return c;
}

/* ---------------------------------- */
/* Creating Objects
/* ---------------------------------- */

// object literal
var myObject = {}; 

// object constructor
var myObject = new Object(); 

//function constructor
function Test(name) {
  this.name = name;
}
var myObject = new Test('kiyun');

// Object.create
var myObject = Object.create(`prototype goes here`);

// ES6 Classes
class Person {
  constructor(name) {
    this.name = name;
  }
}
var fred = new Person("Fred");


/* ---------------------------------- */
/* Prototype
/* ---------------------------------- */

// constructor function
// has `prototype` property, not `__proto__`
function Animal(){
  this.life = 1;
}
// a.__proto__ === Animal.prototype
var a = new Animal(); // a.life = 1
var b = Object.create(Animal); // does not work - Object.create() only can pass in objects, not functions
var c = Object.create(a); // c.life = 1



function Cat() {
  this.leg = 4
}
Cat.prototype = Object.create(Animal.prototype); // Cat.prototype and Animal.prototype point to the same object
var cat = new Cat();

Animal.prototype.speak = function () {
  console.log("Hello");
}

cat.speak(); // Hello

/* ---------------------------------- */
/* Classes
/* ---------------------------------- */

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`${this.name} says hello`);
  }
}
// make subclass of `Person` and call it Worker
class Worker extends Person { 
  // use `super` to call the parent class
  constructor (name) {
    super(name);
  }
  do() {
    console.log(`${this.name} is working`);
  }
  clockin() {
    super.greet();
    this.do();
  }
}
var fred = new Worker("Fred");
fred.clockin(); 
// Fred says hello
// Fred is working
