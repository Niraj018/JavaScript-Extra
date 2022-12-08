

function validateForm(){
    // e.preventDefault();
        //perform validation and if failed set the value of ret to false
    let nameError = document.getElementById('errorName');
    let name = document.getElementById('name');
    let password = document.getElementById("pass1");
    let cPassword = document.getElementById("pass2");
    let passError = document.getElementById("errorPass1")
    errorP = document.getElementById("errorP");
    
    if(name.value.length < 5 ){
        
        nameError.innerHTML = "Short Name";
        return false;
    }
    if(password.value.length < 8){
        passError.innerHTML = "Password too short";
        return false;
    }
    if(password !== cPassword){
        errorP.innerHTML = "Password doesn't match";
    }
    return true;

}


