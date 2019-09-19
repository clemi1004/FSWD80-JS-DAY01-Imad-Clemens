var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

sum_variables = a + b + Number(c) + Number(d) + e;

var f = '1';
var g = 15;
var h = 8;
var i = "1";

multiply_variables = Number(f) * g * h * Number(i);

result = sum_variables/multiply_variables;

document.write(result);
document.write("<br>");

var number_array=[ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

test = number_array[1][1] + " " + number_array[4][2] + " " + number_array[5][3]+ " " +number_array[2][3] + " " +number_array[2][1]

document.write(test)
console.log(test)