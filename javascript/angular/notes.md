# AngularJS 1.X

AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.

## Vocab

- Module
- [Directive](#directive)
- Scope
- Binding expression

---


```javascript
var app = angular.module("myApp",[]);
```
>Create a new **module** called `myApp` in _js/app.js_

A **module** contains the different components of an AngularJS app.

```html
<body ng-app="myApp">  
  ..
</body>
```
>Add `ng-app="myApp"` to the `<body>` in _index.html_.  

- `ng` = Angular
- One `ng-app` per page/DOM


## Controllers

- Builds model
- Model contains data
- Controller grabs that data

`ng-controller`


 CODECADEMY NOTES:

**`ng-app`** (`ng` for Angular) is a <a name="directive"></a>**directive** that tells AngularJS that the `myApp` **module** will live within the `<body>` element, termed the application's **scope.**   
In other words, we used the `ng-app` **directive** to define the application **scope**. The `ng-app` allows Angular to take control of where the directive applies, in this case the `<body>`.


```javascript
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
}]);
```
>Insert this code in **js/controllers/MainController.js**


```html
<body ng-app="myApp">  
  <div class="main" ng-controller="MainController">
    <h1>{{ title }}</h1>
    {{ 20 / 2 }}
  </div>
</body>
```
>Update **index.html**

`{{ title }}` heading will appear as 'Top Sellers in Books'.

The double curly braces `{{ }}` are **binding expressions** in Angular, sometimes called mustaches or handlebars. Angular looks for these binding expressions and tries to evaluate the expressions inside.

Binding expressions can also look at data you have retrieved from a web server.
