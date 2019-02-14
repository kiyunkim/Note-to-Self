// internal json data
var data = '{"firstName":"John", "lastName":"Doe"}';
var myObject = JSON.parse(data);
console.log(myObject.firstName); // John



// using external json
var xhr = new XMLHttpRequest();

// open method - sets parameters
xhr.open('GET', 'data.json', true);
// 1. how to get data
// 2. path to the data
// 3. async?

// track readystate
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  // 0: UNSENT. open() not called yet
  // 1: OPENED. open() has been called
  // 2: HEADERS_RECEIVED. send() has been called, and headers and status are available
  // 3: LOADING. downloading; responseText holds partial data
  // 4: DONE. operation is complete

  console.log(xhr.status);
  // numerical http status code of the xhr response
  // 200: successful

  console.log(xhr.statusText);
  // http status code of xhr response in text
}

// ajax
xhr.onload = function() {
  // triggered when xhr.readyState is 4; data has been loaded

  if (xhr.status === 200) { // if data has loaded correctly
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    // returns JSON data as object
  }
}

// send method - 'activates' the open
xhr.send();



// above in jquery:
$.ajax({
  type: 'GET',
  url: 'data.json',
  async: true,
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
 });