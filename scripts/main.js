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