var userInput = document.getElementById('userName');
var userInpu = document.getElementById('userPass');
var userNumber = document.getElementById('userNumber');
var userInput2 = document.getElementById('userName2');
var userInpu2 = document.getElementById('userPass2');
var userNumber2 = document.getElementById('userNumber2');


function save() {
    localStorage.setItem('userName', userInput.value);
    localStorage.setItem('userPass', userInpu.value);
    localStorage.setItem('userNumber', userNumber.value);
    userInput.value = '';
    userInpu.value = '';
    userNumber.value = '';
}

function save2() {
    localStorage.setItem('userName2', userInput2.value);
    localStorage.setItem('userPass2', userInpu2.value);
    localStorage.setItem('userNumber2', userNumber2.value);
    userInput2.value = '';
    userInpu2.value = '';
    userNumber2.value = '';
}