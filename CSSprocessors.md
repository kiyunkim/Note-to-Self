# CSS 

- **Consistency problem:** need to replace every property when changing a thematic `color`, `font`, `font-size`, etc.
- **Duplication Issues:** `box-sizing` with prefixes have to be copy and pasted every time to a new declaration
- **Cascading avalanches:** when re-naming an ID, the name has to get replaced everywhere in the CSS 


This is where CSS preprocessors or dynamic style sheet languages come in handy ([LESS](#less), [SASS](#sass))
  - Variables that is scoped within a rule or at a top global level
  - Reusable components of CSS
  - Clarity in rule cascading
  - Advanced calculations
  - *Preprocessors results a CSS file after it is processed - it only processes CSS*

---

## SASS
- Dynamic Style Sheet Language
  - "Syntactically Awesome StyleSheets"
- Introduces programming features
- Has 2 syntaxes: SASS and SCSS
  - SASS was based on indention but CSS wasn't valid SASS
    ```sass
    $baseFontSize: 14px
    
    #container
      h1
        font-size: $baseFontSize
    ```
    
  - SCSS is more common, and looks & feels more like CSS
    ```sass
    $baseFontSize: 14px;
    
    #container {
      h2 {
        font-size: $basefontSize;
      }
    }
    ```
    
### SASS on the Server
- Support for Server-Side
  - Node.js
  - ASP.NET iva Plugin (e.g. Chirpy)
  - Rails, JSP, etc

### Variables
- Variables can be scoped globally or locally
```sass
$myColor: #ffeedd;

$color: black;
$unit: 4px; // or 1em or 50%
$list: arial, sans-serif;
$complexList: 1px solid #333;

nav { 
  $color: #333;
  color: $color;
  a {
    color: $color;
  }
}
```

### Operations

```sass
font-size: 4px + 4;  // add 8px
font-size: 14px * 2; // multiply  
color: #fff / 4;  // divide #404040;
width: (100% / 2 ) + 25%; // use order of operations 75%
```
### Color Functions

```sass
// $color does NOT have to be numeric
color: lighten($color, 10%);
color: darken($color, 10%);
color: saturate($color, 10%);
color: desaturate($color, 10%); 

color: fade-in($color, .1);
color: fade-out($color, .1);

color: invert($color);
color: complement($color);
```

### More Functions
```sass
$quoted: quote($sometext);
$unquoted: unquote($sometext); // remove quotes from variables or other pieces of text in the CSS

$value: if(true, $colorTrue, $colorFalse); // if some value is true, choose the first option; if false choose second option

$round: round(3.14);  // round to nearest whole number
$rndUp: ceil(3.14);   // round up to nearest whole number
$rndDwn: floor(3.14); // round down to nearest whole number
$percnt: percentage(.14);  // get percentage
```
[Even more functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)

### String interpolation
- Use pound `#` with the variable in curly braces to input string value of the variable
  - \*this will also work with any value (e.g. `14px` can be put in as a string)
```sass
// can use Ruby/PHP style string insertion
$root: "/images/";
$baseFontSize: 14px;
$baseClass: "myClass";

body {
  background: url("#{$root}background.jpg");
  background: url($root + "background.jpg");
  // both become background: url("/images/background.jpg");
  
  // background: url("#{$baseFontSize + 10}background.jpg"); would become 
  // background: url("24pxbackground.jpg"); since $baseFontSize + 10 has been processed into a string
}

.#{$baseClass}1 { // .myClass1
  color: #333;
}
```
### Rules

- Allows structuring in a logical way

#### Nesting of hierarchies that will be processed into CSS
```sass
nav {
  font-size: 14px;
  ul {
    list-style-type: none;
    li { // nav ul li
      display: inline-block;
    }
  }
}
```
#### Uses parent selector combinator `&` to mix with parent
```sass
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
```

#### Nest properties
```sass 
.button {
  font: {
    family: helvetica, arial, sans-serif;
    size: 14px;
    weight: normal;
  }
}
```

### Directives
- Operations on the CSS - tells the processor to do certain things

#### `@import`
- Take some file and import it directly inside another file in a specific space
  ```sass
  @import "foo.css";
  // emits CSS import
  // @import url(foo.css);

  @import "foo.scss"; // embeds in result
  @import "foo"; // also embeds .scss

  // nesting import
  body {
    @import "colors";
  }
  ```

#### `@extend`
- Extend rules from other rules, or creating inheritance inside of a rule
- Multiple inheritances from a rule or class works as well
  ```sass
  .button {
    color: black;
    text-transform: uppercase;
  }
  .submit-button {
    @extend .button;
    border: 1px solid #333;
  }
  ```
- **Placeholder selectors** will not show up in the generated CSS, only the selectors that extend them will be included in the output. Uses `%` character
  ```sass
  a%button {
    text-transform: uppercase;
    text-decoration: none;
  }
  .navlink {
    @extend %button;
  }
  
  /*** the above compiles to... ***/
  a.navlink {
    text-transform: uppercase;
    text-decoration: none;
  }
  ```
#### `@mixin`
- Repeatable sections in CSS code (e.g. `border-radius` or `box-sizing`, which require different prefixes)
  - Feel like functions: can be called with parameters
  - But take one or more name/value pair
  - Accepts parameters, defaults, overloads
- Define mixin name after `@mixin`, call the mixin with `@include` inside a declaration
  ```sass
    @mixin font-large {
      font: {
        size: 14px;
        family: sans-serif;
        weight: bold;
      }
    }
    h1 {
      @include font-large;
    }
    ```
- Parameterized mixins:
  ```sass
  @mixin round-corners-all($size: 5px) {
    -wekit-border-radius: $size;
    -moz-border-radius: $size;
    border-radius: $size;
  }
  @mixin button($border, $bg) {
    border: $border;
    background: $bg;
  }
  
  .button {
    @include rounded-corners-all(10px);
    // or just to use the default: @include rounded-corners-all;
    @include button(1px solid $black, $white);
  }
  
  ```
#### `@function`
- Create standard code which is used for functional representations
  ```sass
  $app_width: 900px;
  @function column_width($cols) {
    @return ($app_width / $cols) - ($cols * 5px);
    // calculate columns' width based on number of columns
  }
  .col {
    width: column_width(2);
  }
  ```

### Control Directives

#### `@if`
```sass
h1 {
  @if $size > 14px {
    color: blue;
  }
  @else if $size < 14px {
    color: red;
  }
  @else { // if $size == 14px
    color: green;
  }
}
```
  
#### `@for` loop
- Variable based loop
```sass
$page_width: 1000px;

@for $col from 1 through 4 {  
// defines new variable $col
// walk through 4 times specifying that the value of $col is that number
  .col#{$col} { // will loop through .col1, .col2, .. 
    width: $page_width / $col;
  }
}
```

#### `@each` and `@while` loops

```sass
// take a list of items (some strings in this case)
@each $item in first, second, third, fourth {
  .#{$item} { // create .first, .second, .third, .fourth
    background-url: url(/images/#{$item}.jpg); // use same name for image
  }
}

$i: 1;
@while $i < 5 {
  h#{$i} {
    font-size: $i * 4px;
    $i: $i + 1; // to update value of $i at end of loop
  }
}
```











---

## LESS

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
  
### LESS on Client
```html
<link rel="stylesheet/less" type="text/css" href="css/style.less">
<script type="text/javascript" src="js/less.js"></script>
```

The script will look through the DOM to find LESS files by looking at the rel attributes.

#### LESS Example
```less
// single line comments work on LESS
@import "reset.less"; // import this LESS file on top

// this can be put into a separate LESS file - colors.less
@main-color: pink;
@heading-color: black;

.container {
  color: @main-color;
  
  h1 { // target h1 tags inside .container
    color: @heading-color;
  }
}
```
### Variables
- Must start with a letter
- Case sensitive
- Hyphens, underscores, numbers allowed as long as it doesn't start with it
- Are constants (e.g. `@main-color: @main-color + 5%;` doesn't do anything)
- Can be any unit, color, strings (e.g. font-family), or even complex type (entire value of `border` property)

### Operations
```less
font-size: 4px + 4;  // add 8px
font-size: @body-font-size * 2; // multiply  
color: #fff / 4;  // divide #404040;
width: (100% / 2 ) + 25%; // use order of operations 75%
```

### Color Functions
```less
// @color needs to be a numeric value (hex code or hsl, not names)
color: lighten(@color, 10%);
color: darken(@color, 10%);
color: saturate(@color, 10%);
color: desaturate(@color, 10%);

color: fade(@color, 50%); // opacity
color: fadein(@color, 10%);
color: fadeout(@color, 10%);

color: spin(@color, 10%); // spin across color wheel (move 10% across color wheel)
color: mix(@color, #246); // mix two colors
```
### More functions
```less
@hue: hue(@color); // get hue value from color
@saturation: saturation(@color); 
@light: lightness(@color); // get lightness value
@alpha: alpha(@color); // get alpha channel values
@color: hsl(20%, 30%, 40%); // generate color with hsl(hue saturation light) formula

@round: round(3.14);  // round to nearest whole number
@rndUp: ceil(3.14);   // round up to nearest whole number
@rndDwn: floor(3.14); // round down to nearest whole number
@percnt: percentage(.14);  // get percentage
```

### Mixins
- Repeatable sections in CSS code (e.g. `border-radius` or `box-sizing`, which require different prefixes)
  - Look and feel like functinos (take input parametes)
  - But insert more than one name/value pair
  - Accepts parameters, defaults, overloads
- Starts with a name after a `.` with an optional parameter 
  ```less
  .rounded-corners-all(@size: 5px) { // default is 5px
    border-radius: @size;
    -webkit-border-radius: @size;
    -moz-border-radius: @size;
  }

  #container {
    .rounded-corners-all(10px);
    // .roounded-corners-all; would have default of 5px
  }
  ```

### Nested Rules
