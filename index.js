//1.Ways to print in Javascript
//console.log("Hello World");
//alert("me");
//document.write("this is document write")

//2.Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is a warning");
// console.error("This is an error");

//3. JavaScript Variables
// What are variables? - Containers to store data values

/*
multi 
line 
comment
*/

var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);

//4. Data types in JavaScript
//Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is a string";
var str2 = 'This is also a string';

//Objects
var marks = {
    ravi: 34,
    shubham: 78,
    tushar: 99
}
//console.log(marks);

//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und=undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1.Primitive data types:undefined,null,number,string,boolean,symbol
2.Reference data types: Arrays and Objects
*/

var arr = [1, 2, "string", 4, 5]
//console.log(arr)

//5. Operators in JavaScript

//Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

//Assignment operators
var c = b;
//c+=2
//c-=2;//c=c-2;
// c*=2;
// c/=2;
//console.log(c);

//Comparison Operators
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//Logical operators

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!false);
// console.log(!true);

//6. Functions in JavaScript
//DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1,c2)

//7. Conditionals in JavaScript

/*
var age=41;
//Single if statement
if(age>18){
    console.log('You can drink rasna water');
}

//if-else statement
// if(age>18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You can not drink rasna water');
// }

//if-else ladder
age=25;
if(age>32){
    console.log('You are not a kid')
}
else if(age>26){
    console.log("You are not a bachha")
}
else if(age>22){
    console.log("Yes You are not a bachha")
}
else if(age>18){
    console.log("18 You are not a bachha")
}
else{
    console.log("Kid");
}
console.log("End of ladder");
*/

//8. Loops in JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
// ac++;
//ac=ac+1;
//let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

//9. Array methods
// let myArr=["Fan","Camera",34,null,true];
// console.log(myArr.length);
//myArr.pop();
//myArr.push("tushar");
//myArr.shift();
// const newLen=myArr.unshift("tushar");
// console.log(newLen);
// console.log(myArr);

//10.String methods in JavaScript
let myString = "Tushar is a good good good boy";
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("good"));

//console.log(myString.slice(0,3));
d = myString.replace("Tushar", "Shubham");
// d=d.replace("good","bad");
// console.log(d,myString);

//11. DateTime in JavaScript
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//12. DOM Manipulation
let elem = document.getElementById('click');
//console.log(elem);

let elemClass = document.getElementsByClassName("container");
//console.log(elemClass);
//elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

tn = document.getElementsByTagName('div');
//console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element); --->removes an element

//Selecting using query

// sel = document.querySelector('.container');
// console.log(sel);
// sel2 = document.querySelectorAll('.container');
// console.log(sel2);

//13. Events in JavaScript
// function clicked(){
//     console.log('The button was clicked');
// }
// window.onload = function(){
//     console.log('The document was loaded');
// }
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//     console.log("Clicked on container");
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML
    //console.log("Mouse up when clicked on container");
})
firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    //console.log("Mouse down when clicked on container");
})

//14. SetTimeout and setinterval

//Arrow Functions
// function summ(a,b){
//     return a+b;
// }
summ = (a, b) => {
    return a + b;
}
log = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>"
    console.log("I am your log");
}
//clr = setTimeout(log, 5000);
//clr = setInterval(log,2000);
//use clearInterval(clr)/clearTimeOut(clr) to cancel setInterval/setTimeOut

//15. JavaScript Local Storage
// localStorage.setItem('name','tushar');
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.clear();

//16. JSON
// obj = { name: "tushar", length: 1, a: { this: 'tha"t' } }//json accepts only double quotes
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
// parsed=JSON.parse(`{"name":"tushar","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)