//the randome func will create any random no. b/w o and 1


// const min=50;
// const max=100;


// let randNum=Math.floor(Math.random()*(max-min))+min; 


// console.log(randNum);





const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randNum1;
let randNum2;
let randNum3;

myButton.onclick = function() { 
    randNum1 = Math.floor(Math.random() * max) + min;
    randNum2 = Math.floor(Math.random() * max) + min;
    randNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randNum1;
    Label2.textContent = randNum2;
    Label3.textContent = randNum3;
}
