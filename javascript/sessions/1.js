var str = new String('string');
// str has properties from the String object
// inheritance!



// falsy
console.log(!!false);      // false
console.log(!!undefined);  // false
console.log(!!0);          // false
console.log(!!'');         // false
console.log(!!null);       // false
console.log(!!NaN);        // false

console.log(!!'0');        // true bc length of string


// object parameters:
// pass by reference or pass by value ?
var a = 1;
function test(b) {
  return b + 1;
}
test(a);
console.log(a); // 1
// primitive types are passed by value

var a = [1,2,3];
function test(b) {
  b[0] = 2;
  return b;
}
test(a);
console.log(a); // [2,2,3]

// objects are passed by reference


// how to make it so a = [1,2,3] ?
// prototype?