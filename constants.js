// cont=variable that cannot br changed

const PI=3.14;

let radius;
let cercumference;




document.getElementById("submit").onclick=function(){

    radius=document.getElementById("myText").value;
    radius=Number(radius);
    cercumference=2*PI*radius;
    document.getElementById("myH3").textContent=cercumference+"cm";
}