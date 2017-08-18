# CSS 

- **Consistency problem:** need to replace every property when changing a thematic `color`, `font`, `font-size`, etc.
- **Duplication Issues:** `box-sizing` with prefixes have to be copy and pasted every time to a new declaration
- **Cascading avalanches:** when re-naming an ID, the name has to get replaced everywhere in the CSS 


This is where CSS preprocessors ro dynamic style sheet languages come in handy
  - Variables that is scoped within a rule or at a top global level
  - Reusable components of CSS
  - Clarity in rule cascading
  - Advanced calculations
  - *Preprocessors results a CSS file after it is processed*

## LESS

### LESS on Client

```html
<link rel="stylesheet/less" type="text/css" href="css/style.less">
<script type="text/javascript" src="js/less.js"></script>
```

The script will look through the DOM to find LESS files by looking at the rel attributes.

### LESS on Server

- It is common to process LESS files on the server
- Ability to cache
- Reduces processing time on the client
- Has server support for Node.js, ASP.NET, Rails, JSP, etc
  <details>
    <summary>Node.js</summary>

  ```node
  // use Node package manager to install LESS on the server
  $ npm install less
  // require LESS as part of the project
  var less = require('less');
  // use the LESS class to render content
  less.render(lessContents, function(e,css) {
    console.log(css);
  }
  ```
  </details>

#### LESS Example
```less
@main-color: pink;
@heading-color: black;
// single line comments work on LESS

.container {
  color: @main-color;
  
  h1 { // target h1 tags inside .container
    color: @heading-color;
  }
}
```

## SASS
