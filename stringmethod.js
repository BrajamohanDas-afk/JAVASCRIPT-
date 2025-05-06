// string methods = allow you to manipulate and work with text (strings)

let username= "Brajamohan Das";

// console.log(username.charAt(8)); with "charAt" u get the value of the index

// console.log(username.indexOf("a")); with "indexOf" u get the first occurence of the letter

// console.log(username.lastIndexOf("a"));

// console.log(username.length); with "length" we get the length of the value

// username=username.trim(); it trims the blank space

// username=username.toUpperCase();

// username=username.toLowerCase();

// username=username.repeat(10);

// result=username.startsWith(" ");

result=username.endsWith(" ");

if(result){
    console.log("U cannot have with the ' ' in the username");
}
else{
    console.log(username);
}


// .replaceAll("-", "?");
// .padStart(10,"0")
// .padEnd(10,"0")
