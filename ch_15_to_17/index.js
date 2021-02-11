  
    // Create an empty array with the name is courses. ```example: var courses=[] ``
    // Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer") and save all 5 value in "courses" array. example: courses.push(course1)
    // print courses array in alertexample: alert(courses)
    // print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
    // If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit) use Array.splice() to replace and edit index in array
    // print courses array in alertexample: alert(courses)
var  courses =  []
var course1 = prompt("enter course name");
var course2 = prompt("enter course name");
var course3 = prompt("enter course name");
var course4 = prompt("enter course name");
var course5 = prompt("enter course name");
courses.push(course1,course2,course3,course4,course5)
alert(courses);

var course1 = prompt("enter course name",courses[0]);
courses.splice(0,1,course1)
var course2 = prompt("enter course name",courses[1]);
courses.splice(1,1,course2)
var course3 = prompt("enter course name",courses[2]);
courses.splice(2,1,course3)
var course4 = prompt("enter course name",courses[3]);
courses.splice(3,1,course4)
var course5 = prompt("enter course name",courses[4]);
courses.splice(4,1,course5)

alert(courses);



// alert(courses);