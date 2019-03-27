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

//factory pattern
function car(name, model) {

}

/* ---------------------------------- */
/* bind/apply/call
/* ---------------------------------- */

// bind() .. bind `this` object to the function



/* ---------------------------------- */
/* Prototype
/* ---------------------------------- */

// __proto__ is a method in chrome
// prototype points to object

// prototype = property of object

function Letter(){
  this.language = 'english';
}
var a = new Letter();
var b = Object.create(Letter.prototype);
var c = Object.create();



var a = {a: 'b'};

// a object
// a object proto points to Object()
// Object() proto points to null

var animal = {life: 1};

var cat = Object.create(animal);


// constructor function
// has `prototype` property, not `__proto__`
function Animal() {
  this.life = 1;
}

var cat = new Animal();
// cat.__proto__ === Animal.prototype;


function Animal(){
  this.life = 1
};
function Cat() {
  this.leg = 4
}
Cat.prototype = Object.create(Animal.prototype)


Animal.prototype.speak = function () {
  console.log("haha");
}


cat.speak()


/* ---------------------------------- */
/* Class
/* ---------------------------------- */

class Person {
  constructor(name) {
    this.name = name;
  }
}
class worker extends Person {
  constructor (name) {
    super(name);
  }
}
worker.name
var fred = new Person("Fred");

