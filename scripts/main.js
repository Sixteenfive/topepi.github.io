let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Eleven_Supernova2.jpg') {
        myImage.setAttribute('src', 'images/Eleven_Supernova.jpg')
    }else{
        myImage.setAttribute('src', 'images/Eleven_Supernova2.jpg')
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Eleven Supernova: ' + myName;
}
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Eleven Supernova: ' + storedName;
}

const button = document.querySelector('button');

button.onclick = function() {
    setUserName();
}

function getFirstNumber() {
    let num1 = prompt('Enter first number');
    if(!num1 || num1 === null) {
        getFirstNumber();
    } else {
        localStorage.setItem('1stNumber', num1);
}

function getSecondNumber() {
    let num2 = prompt('Enter second number');
    if(!num2 || num2 === null) {
        getSecondNumber();
    } else {
        localStorage.setItem('2ndNumber', num2);
}
