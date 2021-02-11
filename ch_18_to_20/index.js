// Customize previous assignment "ch_15_16_17" with for loop...




var courses = []
for (var i = 0; i <= 4; i++) {
 var course = prompt("Enter course Name");
 courses.push(course);
 
console.log(courses);
}

console.log(courses);

for (var i = 0; i <= 4; i++) {
  var course = prompt("",courses[i]);
  courses.splice(i,1,course);
  
console.log(courses);
  
}
console.log(courses);