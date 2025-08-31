// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("Hello bro");
// document.write("this is documenwrite");

// 2. JavaScript console API 
// console.log("Hello World");
// console.warn("This is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are Variables ? Containers to store data values 
/*var number1 = 34;
var number2 = 56;
console.log(number1 + number2);*/


// 4. Data types in JavaScript
// Numbers
// var num1 = 455;
// var num2 = 56.25

// String
// var str1 = "This is a string"
// var str2 = 'this is also a string'

// Objects 
/* var marks = {
    ravi : 34,
    shubham : 78,
    mohit : 95
}*/
// console.log(marks);

// Booleans
/*var a = true;
var b = false;
console.log(a , b); */

// Undefined
// var und = undefined;
/*var und;
console.log(und);*/

//null
/*var n = null;
console.log(n)*/


/* At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, Symbol
2. Reference data types: Arrays and Objects */


// Arrays
// var arr = [1,2,3,4,5]
// var arr1 =[1,"rohan",5,"somen"]

// Operators in JavaScript
// Arithmetic Operators
// var a = 34;
// var b = 25;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// Assignment Operators 
// var c = b;
// c += 2
// console.log(c)


// Comparison Operators
// var x = 34;
// var y = 24;
// console.log(x > y);
// console.log(x < y);
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);

// logical Operators
// var x = 24;
// var y = 34;

// logical and 
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// logical not
// console.log(!false)
// console.log(!true)


// Function in JavaScript
// DRY = Do not repeat yourself
// function avg(a,b){
//     c = (a + b)/2;
//     return c;
// }

// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1 , c2)

// Conditionals in JavaScript
// Single if statement 
// var age = 4;
// if(age > 2){
//     console.log("You are not a kid");
// }

// If-else statement 
// if(age > 2){
//     console.log("You are not a kid");
// }
// else{
//     console.log("You are a kid")
// }


// if-else Ladder 
// age = 26
// if(age>32){
//     console.log("You are not a kid");
// }
// else if(age > 26){
//     console.log("Bachhe nahi rahe");
// }
// else if(age > 22){
//     console.log("Yes Bachhe nahi rahe");
// }
// else if(age>18){
//     console.log("18 Bachhe nahi rahe")
// }
// else{
//     console.log("Bachhe rahe");
// }

// for loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// forEach loop
// arr.forEach(function(element){
//     console.log(element)
// })

// while loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j])
//     j ++;
// }

// do-while loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// do{
//     console.log(arr[j])
//     j++;
// }while(j<arr.length);

// break & continue
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// for(i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//     }

//     if(i==3){
//         continue
//     }
//     console.log(arr[i])
// }


// array method 
// let myArr = ["Fan", "Camera", 34 , null , true]
// console.log(myArr.length); // print array length
// myArr.pop(); // delete last element
// myArr.push("mohit") // add element
// myArr.shift() // Delete first element
// const newlen = myArr.unshift("mohit")
// console.log(newlen)
// console.log(myArr.toString()) // convert string 
// console.log(myArr.sort()) // sort all element
// console.log(myArr);



// string methods in JavaScript
// let mylovelyString = "Mohit is a good boy and good";
// console.log(mylovelyString.length) // Show string length
// console.log(mylovelyString.indexOf("good")) // Find element , return first element
// console.log(mylovelyString.lastIndexOf("good"))

// console.log(mylovelyString.slice(0,3)) // slicing
// d = mylovelyString.replace("Mohit" , "Rohit"); // Replace element
// console.log(d)



// Dates
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");

// console.log(elem.innnerHTML)
// console.log(elem.innerText)

// console.log(elemClass[0].innnerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('p');
// createdElement.innerText = 'This is a created para';
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = 'This is a created bold';
// tn[0].replaceChild(createdElement2 . createdElement);
// removeChild(element); 


// Selecting Using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)


// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

// // Events in Javascript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
// })

// firstContainer.addEventListener('mouseover' , function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout' , function(){
//     console.log("Mouse out on Container")
// })

// firstContainer.addEventListener('mouseup' , function(){
//     console.log("Mouse up when clicked on Container")
// })

// firstContainer.addEventListener('mousedown' , function(){
//     console.log("Mouse down when clicked on Container")
// })


// Arrow Functions
// function summ(a,b){
//     return a+b;
// }

// summ = (a,b)=>{
//     return a+b;
// }


// SetTimeout and setinterval
// logKaro = ()=>{
//     console.log("I am your log")
// }
// setTimeout(logKaro,2000);
// setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout 


// localStorage
// localStorage.setItem('name' , 'mohit')
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();


//Json
// obj = {name:'mohit',length:1}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"Mohit" , "length":1}`)
// console.log(parsed);


// Template literals - Backticks
a = 34;
console.log(`This is my ${a}`)