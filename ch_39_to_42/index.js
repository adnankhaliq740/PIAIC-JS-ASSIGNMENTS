
    // Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
    // Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
    // Calculate the grade use switch case Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%
    // print output in alert.
let totalMarks = 500;
let course1num = Number(prompt("enter course1 numbers"));
let course2num = Number(prompt("enter course2 numbers"));
let course3num = Number(prompt("enter course3 numbers"));
let course4num = Number(prompt("enter course4 numbers"));
let course5num = Number(prompt("enter course5 numbers"));
let obtainedMarks = course1num + course2num + course3num + course4num + course5num;

let totalPerc = (obtainedMarks * 100)/totalMarks;
console.log(totalPerc);

switch (totalPerc) {
  case '=>90%':
    console.log("A+")
    break;
  case '=>75% || <= 89':
  console.log("A")
  break;
  case '=>61% || <= 74':
  console.log("B")
  break;
  case '=>40% || <= 60%':
  console.log("C")
  break;
  case '=>30% || <= 39':
  console.log("D")
  break;
  case '=>0% || <= 29':
  console.log("F")
  break;
  
}