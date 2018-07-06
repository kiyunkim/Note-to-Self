# RequireJS

- All code is wrapepd in `require()` or `define()` functions.
  - First parameter of these functions is an array of dependency names or array of modules.  (e.g. `require(["purchase"] ...)`) File extension is omitted since requireJS only considers js files.
  - Second parameter to `require()` is an anonymous function (function without a name - declared using the _function operator_ instead of the _function declaration_) which takes an object that is used to call the functions inside the dependent file.
    ```js
    require(["a","b","c"],function(a,b,c){
      // ..
    });
    ```

## Folder Structure in Exercise

```
exercise/
| 
|– scripts/
|   |– credits.js
|   |– main.js
|   |– products.js
|   |– purchase.js
|   `- require.js
| 
`– index.html
```

## Exercise explained

- `main.js` is used for initialization.
- `<script data-main="scripts/main" src="scripts/require.js"></script>` is all that is needed in the HTML file
  - `data-main` attribute defines the initialization point


## Sources

- [Understanding RequireJS for Effective JavaScript Module Loading](https://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/)