let allUsers=[];
let emailLogin=document.querySelector("#email-login")
let passwordLogin=document.querySelector("#password-login")
 let myLoginForm=document.forms[0];
let alertaya=document.querySelector(".danger");

if (JSON.parse(localStorage.getItem("users"))!=null){
   allUsers= JSON.parse(localStorage.getItem("users"));
}
console.log(allUsers);

console.log(myLoginForm);
myLoginForm.addEventListener("submit",function(e){
    e.preventDefault();
    if (sigIn()){
       
        window.location.href="home.html";
      
    }
    else{
        alertaya.classList.replace("d-none","d-block");
        console.log("false");
    }
})
function sigIn(){
   
for (let i=0;i<allUsers.length;i++){
    
  if (allUsers[i].email==emailLogin.value&&allUsers[i].password==passwordLogin.value){
    localStorage.setItem("currentEmail",allUsers[i].name)
      return true;
  }
}
return false;
}