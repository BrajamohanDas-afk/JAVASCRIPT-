const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))+ minNum;

let attempts = 0;
let guess;
let running = true;

while (running == true){
    
    guess = window.prompt(`Guess the number ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)){
        window.alert(`Please enter a valid no.`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid no.`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`IT IS TOO LOW`);
        }
        else if(guess > answer){
            window.alert(`IT IS TOO HIGH`);
        }
        else{
            window.alert(`U GOT THE CORRECT ANSWER ${answer} AND THE NO. OF ATTEMPTS ARE ${attempts}.....`)
            running = false;
        }
    }
    
}