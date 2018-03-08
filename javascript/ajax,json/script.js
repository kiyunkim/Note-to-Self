// json in js file
var me = '{ "name": "Kiyun", "favColor": "Red"}';

var myObject = JSON.parse(me);

document.getElementById('me').innerHTML = myObject.name;




// load external json file using ajax
var xhr = new XMLHttpRequest();

// open() method to set the stage
// 1. method: GET to retrieve information
// 2. path: to data
// 3. async: or not
xhr.open('get', 'data.json', true);

/*
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  console.log(xhr.status); // 200 means successful (OK)
  console.log(xhr.statusText);
}
*/

// wait for data to load successfully
// run when readyState = 4
xhr.onload = function() {
  if (xhr.status === 200){
    var myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);
    console.log(myStuff.kiyun);
    console.log(myStuff.ppl['0'].age);
  }
}

xhr.send();