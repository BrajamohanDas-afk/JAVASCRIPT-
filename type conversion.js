// type conversion change the datatype of a value to another
// (strings, numbers, Booleans)


let age = window.prompt("How old are u?");
age=Number(age);
age+=1;
// in this we can see that when we try to add 1 to the string it doesnot work so we use type conversion
console.log(age);