let hello=document.querySelector("h1")
window.addEventListener("load",function(){
    hello.innerHTML=`Welcome ${localStorage.getItem("currentEmail")}`;
})
let logout=document.forms[0];
console.log(logout);
logout.addEventListener("submit",function(e){
    e.preventDefault();
   
    window.location.href="index.html";
    
})