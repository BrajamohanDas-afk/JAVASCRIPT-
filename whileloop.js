// let username = "";
// while(username === "" || username === null){
//     username = window.prompt("what is ur name");
// }

// console.log(`hello ${username}`);


let loggedin = false;
let username;
let password;
               
while(!loggedin){
    username=window.prompt(`enter the username`);
    password=window.prompt(`enter the password`);

    if(username === '12345'&&password === '56789'){
        loggedin = true;
        console.log('u are loggedin'); 
    }
    else{
        console.log('please write the correct credential');
    }
}