///////////////////*
// SIGN IN 
//////////////////*

///////////////////*
// Show Password
//////////////////*

let passwordSign = document.getElementById("password");


function show(){
    if(passwordSign.type == "password"){
        passwordSign.setAttribute("type" , "text");
    }else{
        passwordSign.setAttribute("type" , "password")
    }
}


////////////////*
// Array.push
///////////////*

let firstName = document.getElementById("first-name");

let lastName = document.getElementById("last-name");

let emailSign = document.getElementById("email");

let arrSign;

if(localStorage.Form != null){
    arrSign = JSON.parse(localStorage.Form)
}else{
    arrSign = []
}



function add(){
    let obj = {
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: emailSign.value,
        Password: passwordSign.value
    }
    arrSign.push(obj)
    localStorage.setItem("Form" , JSON.stringify(arrSign));
    clearInput()
    CheckEmail()
}

function clearInput(){
    firstName.value = "";
    lastName.value = "";
    emailSign.value = "";
    passwordSign.value = "";

    location.href = "log.html"
}






///////////////*
// LOG IN
//////////////*

let emailLog = document.getElementById("email-Log");

let passwordLog = document.getElementById("password-log");

function ShowPass(){
    if(passwordLog.type == "password"){
        passwordLog.setAttribute("type" , "text")
    }else{
        passwordLog.setAttribute("type" , "password")
    }
}

function login(){
    for(let i = 0 ; i < arrSign.length ; i++){
        if(emailLog.value.trim() == arrSign[i].Email && passwordLog.value.trim() == arrSign[i].Password && emailLog.value != "" && passwordLog.value != ""){
            document.getElementById("errorEmail").style.display = "none"
            document.getElementById("errorPass").style.display = "none"
            window.location.href = "/PackageHome/home.html"
        }else if(emailLog.value.trim() != arrSign[i].Email && passwordLog.value.trim() == arrSign[i].Password){
            document.getElementById("errorEmail").style.display = "block"
        }else if(passwordLog.value.trim() != arrSign[i].passwordLog && emailLog.value.trim() == arrSign[i].Email){
            document.getElementById("errorPass").style.display = "block"
        }
    }
}