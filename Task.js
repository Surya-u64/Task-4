//1

function Welcome() {
  console.log("Welcome to Js");
}
Welcome();

//2

function student() {
  console.log("Name : Surya");
  console.log("Age : 24");
  console.log("City : Salem");
}
student();

//3
function addition() {
  let a = 10;
  let b = 20;
  console.log(a + b);
}
addition();

//4

function calculator() {
  let a1 = 30;
  let a2 = 25;
  console.log(a1 + a2);
  console.log(a1 - a2);
}
calculator();

//5

function company() {
  console.log("Welcome to Stackly");
}
company();

//6
function multiplication() {
  let b1 = 10;
  let b2 = 5;
  console.log(b1 * b2);
}
multiplication();

//7
function greeting() {
  console.log("My self Surya");
}
greeting();
greeting();
greeting();

//8
function addition(a, b) {
  console.log(a + b);
}
addition(5, 10);

//9
function student(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}
student("Surya", 24, "Salem");

//10
function employee(name, salary) {
  console.log("Employee Name:", name);
  console.log("Salary:", salary);
}
employee("Surya", 20000);

//11

function multiplication(a, b, c) {
  console.log(a * b * c);
}
multiplication(2, 3, 4);

//12
function welcome(name) {
  console.log(`Welcome to JavaScript, ${name}`);
}
welcome("Surya");

//13
function details(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city); //undefined
}
details("Surya", 24);

//14
function details(name, age, city) {
  console.log(name);
  console.log(age);
}
details("Surya", 24, "Salem");

//15
function addition(a, b) {
  return a + b;
}
console.log(addition(10, 20));

//16
function subtraction(a, b) {
  return a - b;
}
console.log(subtraction(50, 40));

//17
function multiplication(a, b) {
  return a * b;
}
let result = multiplication(3, 4);
console.log(result);

//18
function getAge() {
  return 24;
}
let age = getAge();
console.log(age);

//19
function division(a, b) {
  return a / b;
}
//let res = division(100, 5);
//console.log(res);
console.log(division(50, 4));

//20
function getName() {
  return "Surya";
}

function setName() {
  console.log(getName());
}

setName();

//21
{
  var x = 20;
}
console.log(x); //20 defined because its function scope

//22
//{
// let z = 20;
//console.log(z);
//}
// not defined because its block scope

//23

//{
// const y = 20;
//console.log(y);
//}
// not defined because its block scope

//24
//function Demo() {
// var d = 10;
//}
//Demo();
//console.log(d); //not defined because var can't accessed

//25
console.log(a);

var a = 10; //undefined

//26
//console.log(a);

//let a = 10; //ReferenceError

//27
function student(name) {
  console.log(name);
}

student("Surya"); //named function

//28

let employeee = function (name) {
  console.log(name);
};
employeee("Surya"); //Anonymous Function

//29
let addition1 = (x1, x2) => {
  console.log(x1 + x2);
};
addition1(10, 20); // Arrow Function

//30
function subtraction1(z1, z2) {
  console.log(z1 - z2);
}
subtraction1(30, 20); //named function

let multiplication1 = function (v1, v2) {
  console.log(v1 * v2);
};
multiplication1(10, 20); //Anonymous Function

let division1 = (s1, s2) => {
  console.log(s1 / s2);
};
division1(30, 3); // Arrow Function
