# AngularJS 1.X

AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.

## Files:
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

---

Type the following in **js/app.js**

```javascript
var app = angular.module("myApp",[]);
```

In **index.html**:

```html
<body ng-app="myApp">  
  ..
</body>
```

In **js/controllers/MainController.js**

```javascript
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
}]);
```

Update **index.html**:

```html
<body ng-app="myApp">  
  <div class="main" ng-controller="MainController">
    <h1>{{ title }}</h1>
  </div>
</body>
```

```{{ title }}``` heading will appear as 'Top Sellers in Books'

