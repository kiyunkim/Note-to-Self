# Inheritance and the Prototype Chain

Content:

- [Prototypes](#prototypes)

## <a name="prototypes"></a> Prototypes

- **A function's prototype:** The object *instance* that will become the prototype for all objects created using this function as a constructor.
- **An object's prototype:** The object *instance* from which the object is inherited.

Each object has a private property, which holds a link to another object, called its prototype.  
The prototype object has its own prototype, and so on until an object is reached with `null` as its prototype. This is the final link in the prototype chain.

When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the property chain.

Trying to access a property:

```js
let f = function() {
  this.a = 1;
  this.b = 2;
}
// create object `o` from f()
let o = new f();

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;



```



Use `new` to create a new instance

```js
// this is the constructor
function Bear(type) {
  this.type = type;
}


Bear.growl = function() {
  // only adds to the Bear object, NOT the instances
  return 'grrrr';
}
// add also to the instances: add to the prototype
Bear.prototype.growl = function(){
  console.log(this.type + ' bear says GRRR')
}

var grizzly = new Bear('grizzly');
var polar = new Bear('polar');

function Grizzly() {


}
// inherit Bear
// making it equal Bear.prototype won't create a new object
// so create a new object that is based off of Bear
Grizzly.prototype = Object.create(Bear.prototype);
// everything in the Bear prototype, is applied to Grizzly prototype

var grizzly = new Grizzly()


```

[MDN "Inheritance and the Prototype Chain"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
