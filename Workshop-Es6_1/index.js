/**********************  Let & Const ********************** **/

// var x = 1;
// var x = 2;

/*   
 var  :  
 global scoop
 redeclare 


 let : 
 local scoop
 cannot be redeclare


 const : 
  
*/

// var x = 1;
// let x = 1;

// if (true) {
//   let x = 1;
//   x++;
//   console.log(x);
// }

// console.log(x);

// const y = 2;

// y = 3;

// const array = [1, 2, 3];
// array.push(5);

// console.log(array);
// array = [1];

// const student = {
//   name: "Islem",
//   lastame: "Braham",
//   CIN: 10003299,
// };

// // student = {};
// student.name = "Mehdi";
// // student.age = 23;

// student = {
//   age: 23,
// };

// console.log(student);

/*************************** Arrow function ********************/

//Method 1

function normalFunction() {
  return "Normal function";
}

function sum(x, y) {
  return x + y;
}

//  let x = 2;
//  let y= 3;

console.log(normalFunction());
console.log(sum(2, 3));

//Method 2
let MyNormalFunction = function () {
  return "Normal function";
};

console.log(MyNormalFunction());

//Arrow function

let MyArrowFunction = (name) => "Arrow function " + name;
let MyArrowFunction2 = (_) => "Arrow function";

console.log(MyArrowFunction("Mehdi"));
console.log(MyArrowFunction2());

/******************* this ****************************/

console.log("Hello");

var x = 3;
let y = 2;

console.log(window);

let myFunction = () => {
  return (document.getElementById("this").innerHTML = this);
};

// document.getElementById("btn").addEventListener("click", myFunction);

window.onload = myFunction;

// console.log(this);

function Person() {
  // let that  = this
  this.age = 0;

  setInterval(() => {
    this.age++;
    // that.age++;
    console.log(this.age);
    // console.log(that.age);
  }, 1000);
}

console.log(Person);

let user = new Person();

console.log(user);

/*********************************** Template literals *************************/

// let name = "Imen";
// let age = 20;
// let skills = {
//   css: "90%",
//   js: "90%",
//   html: "100%",
// };

// let msg =
//   "Hello my name is Mehdi and my age  = 24" + "and my skills  : HTML , CSS ,JS";

// let msgTwo = `Hello my name is ${name} and my age

//   = ${age} and my skills
//   :
//   CSS ${skills.css}
//   js ${skills.js}
//   html ${skills.html}`;

// let msgThree = `
//     <div class="test">  ${name} </div>

//   `;

// console.log(msg);
// console.log(msgTwo);
// console.log(msgThree);

// // document.write(msgThree);

// document.body.innerHTML = msgThree;

/*********************************** Spread Operator ***************************/

//Spread arrays

// let arrOne = [1, 2, 3, 4];
// let arrTwo = [5, 6];

// let arrThree = arrOne.concat(arrTwo);

// console.log(arrThree);

// let arrFour = [1, 2, ...arrTwo, 1100, -3, 5];

// console.log(arrFour);

// console.log(Math.min(...arrFour));

// Spread objects

let student = {
  pseudo: "User22",
  adress: "Bizerte",
  skills: {
    css: "80%",
    html: "80%",

    js: {
      skillOne: "ReactJs",
      SkillTwo: "VueJs",
      SkillThree: "AngularJs",
    },
  },
};

// student.age = 28

// student = {...student , age : 28 , skills : {css : "80%" , html : "80%"}}

student = {
  ...student,
  age: 28,
  skills: {
    ...student.skills,
    js: { ...student.skills.js, skillFour: "VanillaJs" },
  },
};

console.log(student);

/******************************** Destructuring  **********************/

let student = {
  pseudo: "User22",
  adress: "Bizerte",
  skills: {
    css: "80%",
    html: "80%",
    js: {
      skillOne: "ReactJs",
      SkillTwo: "VueJs",
      SkillThree: "AngularJs",
    },
  },
};

console.log(`
pseudo : ${student.pseudo}
adress : ${student.adress}
css : ${student.skills.css}
html : ${student.skills.html}
Js Skills :

skillOne : ${student.skills.js.skillOne}

`);

const {
  pseudo,
  adress,
  skills: {
    css,
    html,
    js: { skillOne },
  },
} = student;
// const {css , html} = student.skills  Wrong

console.log(`
pseudo : ${pseudo}
adress : ${adress}
css : ${css}
html : ${html}
Js Skills :
skillOne : ${skillOne}

`);

let x = 2;
let y = 4;

[x, y] = [y, x];

let array = [1, 2, 3, 4, 5, 6, 7];

const [one, two, three] = array;

console.log(one, three, two);

/**************************************  Rest parameters  ***************************/

// let sum = (x,y)=> x+y

// console.log(sum(2,3))

let restParameters = (x, y, ...rest) => {
  console.log(x);
  console.log(y);
  console.log(rest);

  return "";
};

console.log(restParameters(2, 3, 5, 5, 5, 8, 9, 9));

let sumWithRestParameters = (...rest) => {
  let s = 0;
  for (let value of rest) {
    s += value;
  }
  return s;
};

console.log(sumWithRestParameters(1, 2, 3, 8, 9));

/*****************************  Turnery operators ************************/

let age = 3;

// if(age>=18){
//   console.log("Majeur")
// }else {
//   console.log("Mineur")
// }

age >= 18
  ? age > 40
    ? console.log("adulte ")
    : console.log("majeur")
  : age < 5
  ? console.log("bebe ")
  : console.log("Mineur");

/******************************  Array Functions *************************/

// map((el , index)=> traitment)

// let array = [1, 2, 3, 4, 5];

//   // array.map((el , i)=> console.log(`el = ${el} - i = ${i}`))
//   // let newArray = array.map((el , i)=>  el*2)
//   // console.log(array)
//   // console.log(newArray)

// array.forEach((num, index) => array[index]=num * 2);

// console.log(array)

let arr = [1, 12, 23, -9, -8, -7];

let newArr = arr.filter((el, i) => el < 0);
let newArr2 = arr.find((el) => el < 0);

console.log(newArr);
console.log(newArr2);

const products = [
  { name: "Milk", price: 15 },

  { name: "Water", price: 9 },

  { name: "Bread", price: 5 },

  { name: "Bread", price: 2 },
];
const filterProducts = () =>
  products.filter((el) => el.price < 10).map((el) => `name : ${el.name}`);

console.log(filterProducts());

let s = 0; //acc
for (let i = 0; i < array.length; i++) {
  s += array[i]; //crr
}
console.log(s);

// console.log(array.reduce((acc,crr)=>acc/crr))
