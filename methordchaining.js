// Method Chaining = Calling one method after another in one continuous line of code.

let username = window.prompt("What is ur name:-");

//----------NO METHORD CHAINING----------

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = letter + extraChar;

console.log(username);



//----------METHORD CHAINING----------

username = username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase()

console.log(username);







