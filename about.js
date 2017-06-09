var userInput = document.getElementById('userName');
var userInpu = document.getElementById('userPass');
var userNumber = document.getElementById('userNumber');
var userInput2 = document.getElementById('userName2');
var userInpu2 = document.getElementById('userPass2');
var userNumber2 = document.getElementById('userNumber2');

var nam1 = document.getElementById('nam1');
var pa1 = document.getElementById('pa1');
var num1 = document.getElementById('num1');

var nam2 = document.getElementById('nam2');
var pa2 = document.getElementById('pa2');
var num2 = document.getElementById('num2');


var name1 = localStorage.getItem('userName');
var pass1 = localStorage.getItem('userPass');
var numb1 = localStorage.getItem('userNumber');
nam1.innerHTML = name1;
pa1.innerHTML = pass1;
num1.innerHTML = numb1;


var name2 = localStorage.getItem('userName2');
var pass2 = localStorage.getItem('userPass2');
var numb2 = localStorage.getItem('userNumber2');
nam2.innerHTML = name2;
pa2.innerHTML = pass2;
num2.innerHTML = numb2;

function change() {
    nam1.innerHTML = name2;
    pa1.innerHTML = pass1;
    num1.innerHTML = numb1;

    nam2.innerHTML = name1;
    pa2.innerHTML = pass2;
    num2.innerHTML = numb2;
}