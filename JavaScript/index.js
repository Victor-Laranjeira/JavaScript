// Variables   1

// let firstName = "Bob"; // String
// let age = 23; // Number
// let student = true; // Boolean

// console.log("Hello ", firstName);
// console.log("You are ", age, " years old");
// console.log("Enrolled ", student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;

// ----------------------------------------------------------------------------------------------------

//User input   2

// let username = window.prompt("What's your name?: ");
// console.log(username);

// let username;

// document.getElementById("button").onclick = function(){
//     username = document.getElementById("text").value;
//     console.log(username);
//     document.getElementById("label").innerHTML = "Hello " + username;
// }

// ---------------------------------------------------------------------------------------------------

// Type conversion

// let age = window.prompt("How old are you?: ");

// console.log(typeof age);
// age = Number(age);
// age += 1;

// console.log("Happy birthday. You are", age, " years old.");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("Pizza");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// -------------------------------------------------------------------------------------------------

// Counter program 3

// let count = 0;

// document.getElementById("decreasebtn").onclick = function() {
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetbtn").onclick = function() {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increasebtn").onclick = function() {
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// --------------------------------------------------------------------------------------------------

// Random number generator  4

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onClick = function() {
//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;
    
//     document.getElementById("xLabel").innerHTML = x;
//     document.getElementById("yLabel").innerHTML = y;
//     document.getElementById("zLabel").innerHTML = z;
// }

// --------------------------------------------------------------------------------------------------

// String properties

// let username = "Bob Allen";
// let phoneNumber = "123.456.7890";

// // console.log(username.length);
// // console.log();
// // console.log();
// // console.log();
// // username = username.trim();
// // username = username.toUpperCase();
// // username = username.toLocaleLowerCase()

// phoneNumber = phoneNumber.replaceAll(".", "-");

// console.log(phoneNumber);

// ------------------------------------------------------------------------------------------------

// Slice()

// let fullName = "Bob Allen";
// let firstName;
// let lastName;

// // firstName = fullName.slice(0, 3);
// // lastName = fullName.silde(4);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// ---------------------------------------------------------------------------------------------------

// Checked property  5

// document.getElementById("myButton").onclick = function() {
//     if(document.getElementById("myCheckBox").checked){
//         console.log("You have sent something.");
//     }else {
//         console.log("you haven't sent anything.");
//     }
// }

// ---------------------------------------------------------------------------------------------------

// template literals = delimited with (`) - allows embedded variables and expressions  6

// let userName = "Bob";
// let items = 3;
// let total = 75;

// // console.log("Hello ",userName);
// // console.log("You have ",items," items in your cart");
// // console.log("Your total is $ ",total,);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

// let text = 
// `Hello ${userName}<br>
// You have ${items} items in your cart<br>
// Your total is $${total}`;

// // console.log(text);
// document.getElementById("myLabel").innerHTML = text;

// ---------------------------------------------------------------------------------------------------

// toLocaleString() = returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {option})

// 'locale' = specify the language (undefined = default set in browser)
// 'option' = object with formatting option

// let myNum = 28;

// // myNum = myNum.toLocaleString("en-US");
// // myNum = myNum.toLocaleString("hi-IN");
// // myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

// // myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(myNum);

// -------------------------------------------------------------------------------------------------

// Number guessing game  7

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function() {
//     let guess = document.getElementById("guessField").value
//     guesses += 1;

//     if(guess == answer){
//         alert(`${answer} is the #. It took you ${guesses} guesses`)
//     }else if(guess < answer){
//         alert("Too small")
//     }else{
//         alert("Too large")
//     }
// }

// -------------------------------------------------------------------------------------------------

// Temperature conversion program  8

// document.getElementById("submitButton").onclick = function(){
//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = celsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";
//     }else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F";
//     }else{
//         document.getElementById("tempLabel").innerHTML = "Select a unit";
//     }
// }

// function celsius(temp) {
//     return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp) {
//     return temp * 9 / 5 + 32;
// }

// --------------------------------------------------------------------------------------------------

// array

// let fruits = ["apple", "orange", "banana"];

// // fruits[2] = "coconut";

// fruits.push("lemon");   //add an element
// fruits.pop();           //removes last element 
// fruits.unshift("mango");//add at the beginning
// fruits.shift();         //removes from beginning

// let length = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(index);

// --------------------------------------------------------------------------------------------------

// 2d arrays

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][2] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}