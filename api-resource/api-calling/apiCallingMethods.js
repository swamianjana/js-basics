// api calling methods

// Here are the possible ways to make an API call:

// 1. XMLHttpRequest -> Javascript - AJax | XHR
// 2. fetch -> Javascript 
// 3. Axios -> ReactJS
// 4. jQuery -> jQuery

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//  1. XMLHttpRequest:  class 
// format of calling methods

let request = new XMLHttpRequest();
// request -> object of XMLHttpRequest
// request.open("","") // 
// open method -> parameters-> 1. HTTP methos, URL 

reuqest.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // promise // connection open
request.send(); // It alows to connect to the server // return response as soon as possible
request.onload(responseHandler);

function responseHandler(response) {
    console.log("res ",response);
}
