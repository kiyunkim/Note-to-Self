# Design Patterns

#### IRL Design Patterns

Problems | Solutions
--|--
Entry/Exit for large public buildings | Revolving doors
Pedestrian traffic | Sidewalks

#### Code Design Patterns

Problems | Solutions
--|--
Designing Service Layers<br>(e.g. Separate data manipulation code from controller)| Module Pattern
Overly complex object interfaces (e.g. DOM) | Façade pattern (e.g. jQuery) 
Visibility into State Changes<br>(object reactions to another object's changes)| Observer pattern

## Types of Patterns

### Creational

Patterns that deal with the creation of new instances of an object

  1. Constructor pattern
      > Constructor function:
      ```js
      var Task = function(taskName) {
        this.taskName = taskName;
        this.completed = false;

        this.complete = function() {
          console.log('completing task: ' + task.taskName);
          this.completed = true;
        }
      }

      // copies of the object Task
      var task1 = new Task('create demo');
      var task2 = new Task('run demo');

      task1.complete();
      ```
  2. Module pattern
  3. Factory
  4. Singleton

### Structural

Deal with the makeup of the object
1. Decorator
2. Façade
3. Flyweight 

### Behavioral

How objects operate and interact with each other
1. Command
2. Mediator
3. Observer
