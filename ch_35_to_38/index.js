// Java-script assignments chapter 35 to 38

//     input value from user in String var inputValue="cloUd naTive computinG"
//     Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
//     print value in console.log() console.log(inputValue) | check result in browser console


// Understand this logic

// var value= multiply(4,3,6);

// console.log("value", value); // The result is ?

// function add(a, b){ var z= a+b; return z; };

// function multiply(a, b, c){ var z= a* add(b, c); return z; };

// console.log("course", course); // The result is ? console.log("z", z); // The result is ?

// var course="cloud native computing";




var inputValue="cloUd naTive computinG";

const toTitleCase = (inputValue) => {
  return inputValue
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

let result = toTitleCase(inputValue);
console.log(result);



// Second Assignment

//     User input value in Number through prompt Example value=5
//     Factorialize a Number use Function
//     print value in console.log() console.log(value); the result is 120
let num = Number(prompt("Enter Number"));
let fact = num;
function factorize(fact) {
  
  for (i = 1; i <num ; i++) {
    fact = fact *  i
  }
  return fact;
}
// factorize()
console.log(factorize(fact));