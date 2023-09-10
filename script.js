const regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let errorText=document.getElementById('error-text');
let emailAddress=document.getElementById('email-address');
let check=true;
const validateEmail=()=>{
    let email=emailAddress.value;
    if(!email.match(regex) && email!==''){
        emailAddress.style.borderColor="red";
        errorText.style.visibility= "visible";
        check=false;
    }else{
        emailAddress.style.borderColor="hsl(223, 100%, 88%)";
        errorText.style.visibility= "hidden";
        check=true;
    }
    return check;
}

const onSubmit=()=>{
    if(validateEmail()){
        emailAddress.value="";
    }
}