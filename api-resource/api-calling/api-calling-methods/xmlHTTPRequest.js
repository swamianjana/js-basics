// api calling methods

// Here are the possible ways to make an API call:

// 1. XMLHttpRequest -> Javascript - AJax | XHR
// 2. fetch -> Javascript 
// 3. Axios -> ReactJS
// 4. jQuery -> jQuery

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//  1. XMLHttpRequest:  class 
// format of calling methods

console.log("starting.....");
let request = new XMLHttpRequest();
// request -> object of XMLHttpRequest
// request.open("","") // 
// open method -> parameters-> 1. HTTP methos, URL 

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // promise // connection open
request.open("GET", "https://jsonplaceholder.typicode.com/posts"); // promise // connection open
request.send(); // It alows to connect to the server // return response as soon as possible
request.onload = responseHandler;

function responseHandler(response) {
    console.log("this ", this);
    console.log("res ",response);
    console.log("response status ", response.target)
    if(this.status === 200) {
        console.log("response data", this.response)
    }
}
