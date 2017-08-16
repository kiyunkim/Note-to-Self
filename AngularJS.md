# AngularJS 1.X

AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.

## File list:
- index.html  
- <details>
  <summary>css</summary>
  
  - main.css
  </details>
- <details>
  <summary>js</summary>
  
  - app.js
  - <details>
     <summary>controllers</summary>
     
    - MainController.js
    </details>  
  - <details>
     <summary>shared</summary>
     
    - angular-mocks.js
    - angular-route.min.js
    - angular.min.js
    </details>
  </details>
- <details>
  <summary>test</summary>
  
  - test.js
  </details>


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
>Add `ng-app="myApp` to the `<body>` in _index.html_.  

- `ng` stands for Angular
- Only one `ng-app` directive is allowed per page/DOM

**`ng-app`** (`ng` for Angular) is a <a name="directive"></a>**directive** that tells AngularJS that the `myApp` **module** will live within the `<body>` element, termed the application's **scope.** In other words, we used the `ng-app` **directive** to define the application **scope**. The `ng-app` allows Angular to take control of where the directive applies, in this case the `<body>`.


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
