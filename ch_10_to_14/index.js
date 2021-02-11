    // input a value from user for example num1 is 7
    // input a second value from user for example num2 is 3
    // input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
    // print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1



    var num1 = parseInt(prompt("Enter Number"));
    var num2 = parseInt(prompt("Enter Number"));
    var sign = prompt("Enter Sign");
    var solution = num1 + sign + num2;
    alert(num1 + sign + num2 + " = " + eval(solution));