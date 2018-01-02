# Objects

An **object** is a collection of **properties**, which are described in the form of **key/value** pairs. In other words, key/value pairs make up a property and its value, which is assigned to an object. We can use objects to model "things" using code.

## Object Literal

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
Objer literals create and define an object at the same time; creating an **instance** of an object.

## Methods

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

## Object Constructor

- Function used to create **multiple instances** of an object
  - Best practice to name the function with the first letter capitalized
  - Each instance inherits the properties and methods of its constructor

```js
function Friend(name, tshirtColor) {
  this.name = name;
  this.tshirtColor = tshirtColor;
}

// create an instance of the constructor
var joe = new Friend("Joe", "red");


// in object literal notation:
var joe = {
  name: "Joe",
  tshirtColor: "red"
};
```

## Object Oriented Programming



