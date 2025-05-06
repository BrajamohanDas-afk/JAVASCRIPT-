// this is the easy method=window prompt


// let username;

// username= window.prompt("What is ur name ??");

// console.log(username);




// this the hard merthod=html textbox

let username

document.getElementById("mySumit").onclick= function(){
    username = document.getElementById("myText").value;   //it will take the input from the user
    username = document.getElementById("myH1").textContent=`HELLO ${username}` //it will give the output
}