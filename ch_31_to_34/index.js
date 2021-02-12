// Java-script assignments chapter 31 to 34

//     input your name through prompt. for example name is "Ameen Alam"

//     input your DOB(date) through prompt. for example date is "24"

//     input your DOB(month) through prompt. for example month is "05"

//     input your DOB(year) through prompt. for example year is "1999"

//     print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

//     print meassage in console.log() "Your DOB is {in pakistan standard time format}"

//     print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"

//     "Your Age in Days 7510"

//     print meassage in console.log() "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam. Today is Your 20th Birthday"
let name = console.log("enter your name");
let dobd = console.log("enter your dobd");
let dobm = console.log("enter your dobm");
let doby = prompt("enter your doby");
console.log(`Hello ${name}, Good Morning`);
console.log(`Your DOB is ${dobd},${dobm} ${doby}`);
let date = new Date();
let years =date.getFullYear() - date.setTime(doby);
console.log(years);
let month = date.setTime(12) - date.setTime(2)
console.log(month);