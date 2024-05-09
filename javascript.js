let singUp=document.getElementById("signUp");
let signIn=document.getElementById("singIn");
let nameInput=document.getElementById("nameInput");
let title=document.getElementById("title");

signIn.onclick=function(){
    nameInput.style.maxHeight= "0";
    title.innerHTML="Login";
    singUp.classList.add("disable");
    sin4.classList.remove("disable");
}

singUp.onclick=function(){
    nameInput.style.maxHeight= "60";
    title.innerHTML="Registro";
    singUp.classList.remove("disable");
    sin4.classList.add("disable");
}