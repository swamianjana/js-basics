// api calling using fetch method

// fetch(URL, payload) /// return promise object
/* 
URL: required
payload: optional

by default fetch uses http GET method

if you want to use other methods then you need to send that method in pyalod

below code called payload 
{
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}
*/




// GET
// fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => {
//     console.log("response ", response)
//     return response.json()
// }).then(data => {
//     console.log("data ", data)
// })

fetch("https://jsonplaceholder.typicode.com/todos/1").
then((response) => response.json()).
then((data) => console.log("data ", data))

// with payload
fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/xml',
    }
}).then((response) => response.json()).
then((data) => console.log("data with payload ", data))
