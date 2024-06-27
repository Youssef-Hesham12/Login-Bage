let nameInput=document.querySelector("#NameInput");
let emailInput=document.querySelector("#newEmail");
let passwordInput=document.querySelector("#newPassword");
let formSignUp=document.forms[0];
let allInputEvent=document.querySelectorAll("input")
let alertaya=document.querySelector(".success");
let icon=document.querySelector("i");



let allUsers=[];
if (JSON.parse(localStorage.getItem("users"))!=null){
   allUsers= JSON.parse(localStorage.getItem("users"));
}


formSignUp.addEventListener("submit",function(e){
    e.preventDefault();
    addNewUser();
})

 function addNewUser(){
    if ( validate()&&!isExist()){
        user={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }
        allUsers.push(user);
        localStorage.setItem("users",JSON.stringify(allUsers));
        
        alertaya.classList.replace("d-none","d-block")
        icon.style.color="green";
        icon.style.borderColor="green";

        
        clearall(); 
    }
    else{

    }
    
    }
    
 

 function clearall(){
    nameInput.value=null;
    emailInput.value=null;
    passwordInput.value=null;
 }
 
 function validate(){
    
    let isvalid=false;
    let valid={
        NameInput:/^[a-z A-z ]{5,}$/,
        newEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        newPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    }
    
    for (let i=0;i<allInputEvent.length;i++){
        let myParent=  allInputEvent[i].parentElement;
        let myAlert=myParent.nextElementSibling;
       
        if (valid[allInputEvent[i].id].test(allInputEvent[i].value)){
            myAlert.classList.replace("d-block","d-none")
        }
        else{
        myAlert.classList.replace("d-none","d-block")  
        }
       
    }
    for (let i=0;i<allInputEvent.length;i++){
        if (valid[allInputEvent[i].id].test(allInputEvent[i].value)!=true){
              isvalid=false;
        }
        else{
            isvalid=true;
        }
    }
    return isvalid;

 }
function isExist(){
    
    for (let i=0;i<allUsers.length;i++){
        if (allUsers[i].email==emailInput.value){
            let myParent=  emailInput.parentElement;
        let myAlert=myParent.nextElementSibling;
        myAlert.innerHTML=`the email is exist !`;
        myAlert.classList.replace("d-none","d-block")
            return true;
            
        }
    }
    return false;
}
for (let i=0;i<allInputEvent.length;i++){
    allInputEvent[i].addEventListener("focus",function(){
        alertaya.classList.replace("d-block","d-none");
        icon.style.color="white";
        icon.style.borderColor="white";
    })
}



