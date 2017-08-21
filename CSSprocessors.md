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
```sass
$myColor: #ffeedd;

$color: black;
$unit: 4px; // or 1em or 50%
$list: arial, sans-serif;
$complexList: 1px solid #333;
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

color: fade_in($color, .1);
color: fade_out($color, .1);

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
