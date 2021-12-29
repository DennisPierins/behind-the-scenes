'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      // const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // BLOCK SCOPED (var is not)
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Dennis';
calcAge(1991);

// Hoisting with variables
console.log(me); // Undefined
// console.log(job); // Cannot access 'job' before initialization
// console.log(year); // Cannot access 'year' before initialization

var me = 'Dennis';
let job = 'Jahbless';
const year = 1991;

// Hoisting with functions
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2)); // Cannot access 'addExpr' before initialization
// console.log(addArrow(1, 2)); // Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example - DON'T USE var!!!
if (!numProducts) deleteShoppingCart(); // numProducts is undefined! Will trigger if block

var numProducts = 10;

function deleteShoppingCart() {
  console.log('ALL PRODUCTS DELETED');
}

console.log(this); // Window

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // Undefined
};

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window
};

calcAge1(1989);
calcAgeArrow(1989);

const dennis = {
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

dennis.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = dennis.calcAge;
matilda.calcAge();

const f = dennis.calcAge;
f();
*/

/*
const dennis = {
  firstName: 'Dennis',
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

dennis.greet();
dennis.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 9, 12, 21);

var addArrow = (a, b) => {
  // Will not work with arrow functions
  // console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge); // 31, 30

const me = {
  name: 'Dennis',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend); // {name: "Dennis", age: 27}
console.log('Me', me); // {name: "Dennis", age: 27}
*/

/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// Will not create a new object!
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Only creates a shallow copy (copies the properties on the 'first level')
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// The array within both of the objects will change!
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
