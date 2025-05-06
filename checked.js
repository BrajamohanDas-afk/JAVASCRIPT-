//.checked is the property that checked the property of the an HTMl checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const Gpay = document.getElementById("Gpay");
const Paypal = document.getElementById("Paypal");
const paytm = document.getElementById("paytm");
const mySumit = document.getElementById("mySumit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");   

mySumit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent='You are done for!!!!!!!!!!!!!!!!!'
    }
    else{
        subResult.textContent='You are safe'
    }
    if(Gpay.checked){
        paymentResult.textContent='You are using Gpay'
    }
    else if(Paypal){
        paymentResult.textContent='You are using Paypal'
    }
    else if(paytm){
        paymentResult.textContent='You are using Paytm'
    }
    else{
        paymentResult.textContent='Bitch use something'
    } 
}