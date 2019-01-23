# Inheritance and the Prototype Chain

Content:

- [Prototypes](#prototypes)

## <a name="prototypes"></a> Prototypes

- **A function's prototype:** The object *instance* that will become the prototype for all objects created using this function as a constructor.
- **An object's prototype:** The object *instance* from which the object is inherited.

#### Prototypal Inheritance Chains

```js
function Animal(voice) {
  this.voice = voice || 'Roar';
}
Animal.prototype.speak = function() {
  console.log(this.voice);
}

function Cat(name, color) {
  Animal.call(this, 'Meow');
  this.name = name;
  this.color = color;
}
Cat.prototype = Object.create(Animal.prototype); // Object.create instead of new to prevent function from running while declaring
Cat.prototype.constructor = Cat;

```
#### Classes 

- Class syntax generally work the same as constructor functions (difference: class constructor isnt' a function, it's a class; members of classes are not enumerable by default)

```js
class Animal {
  constructor(voice) {
    this.voice = voice || 'Roar';
  }
  speak() {
    console.log(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow'); // for constructor(voice) in the parent's class's constructor
    this.name = name;
    this.color = color;
  }
}


```
