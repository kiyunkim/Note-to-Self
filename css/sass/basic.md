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

#### SASS Data types
- Numbers (`1`, `13px`)
- Strings with and without quotes
- colors
- Booleans
- Nulls
- List of values
- Maps from one value to another

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


