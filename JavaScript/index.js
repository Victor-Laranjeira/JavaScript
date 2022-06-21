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

// let fruits =     ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats =      ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[0][2] = "steak";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }

// --------------------------------------------------------------------------------------------------

// spread operator

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(numbers);
// console.log(maximum);

// --------------------------------------------------------------------------------------------------

// rest parameter = represents an idefinite number of parameter

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

// ----------------------------------------------------------------------------------------------------

// callback = a functions passed as an argument to another function  9

// sum(2, 3, displayDom);

// function sum(x, y, callBack){
//     let result = x + y;
//     callBack(result);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDom(output){
//     document.getElementById("myLabel").innerHTML = output;
// }

// --------------------------------------------------------------------------------------------------

// array.forEach() = executes a provided callback function once for each array element

// let students = ["bob", "john", "dom"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

// ---------------------------------------------------------------------------------------------------

// array.map() = executes a provided callback function once for each array element and creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }

// ---------------------------------------------------------------------------------------------------

// array.filter() = creates a new array with all elements that pass the test provided by a function

// let ages = [15, 16, 17, 18, 19, 21];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

// -------------------------------------------------------------------------------------------------

// array.reduce() = reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(element){
//     return total + element;
// }

// -------------------------------------------------------------------------------------------------

// sort an array of numbers

// let numbers = [10, 20, 50, 70, 100, 90, 5];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y){
//     return y - x;
// }

// function ascendingSort(x, y){
//     return x - y;
// }

// function print(element){
//     console.log(element);
// }

// ---------------------------------------------------------------------------------------------------

// arrow function expression = compact alternative to a traditional function expression

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

// --------------------------------------------------------------------------------------------------

// map = object that hold key-value pairs of any data type

// const STORE = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50],
// ]);

// STORE.get("t-shirt");
// STORE.set("hat", 40);
// STORE.delete("hat");
// console.log(STORE.size);

// STORE.forEach((value, key) => console.log(`${key} $${value}`));

// --------------------------------------------------------------------------------------------------

// object

// const car = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log("You drive the car");
//     },

//     brake : function(){
//         console.log("You step on the brake")
//     }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.brake();

// --------------------------------------------------------------------------------------------------

// class

// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game.");
//     }
//     exit(){
//         console.log("you exited the game.");
//     }
// }

// const player1 = new Player();

// player1.score = 10;
// console.log(score);

// player1.pause();
// player1.exit();

// ---------------------------------------------------------------------------------------------------

// Constructors

// class Student{

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`)
//     }
// }

// const student1 = new Student();

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// -------------------------------------------------------------------------------------------------

// static = belongs to the class, not the objects properties

// class Car{
//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }

// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("Lambo");
// const car4 = new Car("Honda");
// const car5 = new Car("Subaru");

// --------------------------------------------------------------------------------------------------

// inheritance(herança)

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "Rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "Fish";

//     swim(){
//         console.log(`This ${this.name} is swiming`);
//     }
// }
// class Hawk extends Animal{
//     name = "Hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(hawk.alive);
// hawk.eat();
// fish.name();
// rabbit.run();

// --------------------------------------------------------------------------------------------------

//super = Refers to the parent class

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.age();
// fish.name();
// hawk.flySpeed();

// --------------------------------------------------------------------------------------------------

// get/set

// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this.power}hp`
//     }
//     get gas(){
//         return `${this.gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas = -100;

// console.log(car.power);
// console.log(car.gas);

// ---------------------------------------------------------------------------------------------------

// error / throw

// try{
//     let x = window.prompt("Enter a #");
//     x = Number(x);

//     if(isNaN(x)) throw "That wasn't a number";
//     if(x == "") throw "That was empty";

//     console.log(`${x} is a number`);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("This always executes.");
// }

// ---------------------------------------------------------------------------------------------------

// Clock Program  10

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000)

// function update(){
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";

//         hours = (hours % 12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`
//     }
//     function formatZeroes(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }

// --------------------------------------------------------------------------------------------------

// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods

// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File loaded.");
//     }else{
//         reject("File NOT loaded.");
//     }
// });

// promise.then(value => console.log(value)).catch(error => console.log(error));

// --------------------------------------------------------------------------------------------------

// async = makes a function return a promise

// async function loadFile(){
//     let fileLoaded = true;

//     if(fileLoaded){
//         return "File loaded.";
//     }else{
//         throw "File NOT loaded.";
//     }
// }

// loadFile().then(value => console.log(value)).catch(error => console.log(error));

// -------------------------------------------------------------------------------------------------

// await = makes an async function wait for a promise

// async function loadFile(){
//     let fileLoaded = true;

//     if(fileLoaded){
//         return "File loaded.";
//     }else{
//         throw "File NOT loaded.";
//     }
// }
// async function startProcess(){
//     try{
//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// startProcess();

// --------------------------------------------------------------------------------------------------

// Modules

// import {PI, getCircumference, getArea} from "./math.utils.js"
// import * as MathUtil from "./math.utils.js"

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);

// -------------------------------------------------------------------------------------------------

// Element selectors  11

// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = documents.getElementsByName("fruits");

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// });

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "lightgreen";

// let desserts = document.getElementsByClassName("desserts");
// desserts[1].style.backgroundColor = "lightgreen";

// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen";

// let element = document.querySelectorAll("[for]");
// element.forEach(element => {
//     element.style.backgroundColor = "lightgreen";
// })

// --------------------------------------------------------------------------------------------------

// add/change HTML elements  12
// .textContent

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = mango;
// // myList.append(listItem);
// // myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);

// -------------------------------------------------------------------------------------------------

// add/change CSS properties  13

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#222222";
// title.style.color = "rgb(50, 200, 250)";
// title.style.fontFamily = "Consolas";
// title.style.textAlign = "center";
// title.style.border = "2px";
// title.style.display = "block";

// -------------------------------------------------------------------------------------------------

// events  14

// const element = document.getElementById("myButton");
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething(){
//     // alert("You did something");
//     element.style.backgroundColor = "red";
// }
// function doSomethingElse(){
//     alert("You did something");
//     element.style.backgroundColor = "lightgreen";
// }

// --------------------------------------------------------------------------------------------------

// .addEventListener  15

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue(){
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue";
// }

// --------------------------------------------------------------------------------------------------

// show/hide elements  16

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {
//     if(myImg.style.visibility == "hidden"){
//         myImg.style.visibility = "visible";
//     }else{
//         myImg.style.visibility = "hidden";
//     }
// });

// --------------------------------------------------------------------------------------------------

// detect key presses  17

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y += 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y -= 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x += 5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x -= 5;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }

// -------------------------------------------------------------------------------------------------- 

// animations  18

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);

// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }else{
//             degrees += 1;
//             x += 1;
//             y += 1;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y + "px";
//             myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }

// --------------------------------------------------------------------------------------------------

// canvas  19

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

/*
//DRAW LINES
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/
/*
//DRAW TRIANGLE
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/
/*
//DRAW RECTANGLE
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/
/*
//DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/
//DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);

// -------------------------------------------------------------------------------------------------

// window = interface used to talk to the web browser  20
//                   the DOM is a property of the window

// const myButton = document.querySelector("#myButton");

//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

//window.alert("Hello!");
//window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/

// -------------------------------------------------------------------------------------------------

// cookies

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}