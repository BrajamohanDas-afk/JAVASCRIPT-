// string slicing= creating a substring from a portion of another string
// string. slice(start, end)

const fullName="Brajamohan Das";

// let firstName = fullName. slice(0, 10);
// let lastName = fullName. slice(11, 14);

// let firstName = fullName.slice(0, fullName.indexOf(" ")); 
let lastName = fullName.slice(fullName.indexOf(" "), 14); 

// console.log(firstName);
console.log(lastName);