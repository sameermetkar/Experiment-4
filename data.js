var username = document.getElementById('user')
var pass = document.getElementById('pssd');
var email = document.getElementById('mail');
var dob = document.getElementById('dob');
var city = document.getElementById('city'); 

//validation box variables
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var len = document.getElementById('len');
var spchar = document.getElementById('spchar');
var user = document.getElementById('usr');
var checkmail = document.getElementById('checkmail');
var checkdob = document.getElementById('checkdob');


/**********validation box on click********************/


/****For Password Field******/
pass.onfocus = function(){
   
    var disp = document.getElementById('validation-box');
    disp.style.display= "block";   
}

pass.onblur = function(){
    document.getElementById('validation-box').style.display="none";   
}

pass.onkeyup = function(){

   //For lowercase
   var  lowercaseletters =/[a-z]/g;

    if(pass.value.match(lowercaseletters)){
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    }else{
        lower.classList.remove("valid");
        lower.classList.add("invalid");  
    }

    //For uppercase
    var  uppercaseletters =/[A-Z]/g;

    if(pass.value.match(uppercaseletters)){
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    }else{
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    //For password length
    if(pass.value.length>=8){
        len.classList.remove("invalid");
        len.classList.add("valid");
    }else{
        len.classList.remove("valid");
        len.classList.add("invalid");
    }
    

    //For Special Character
    var  specialCharacters =/[^a-zA-Z\d]/g

    if(pass.value.match(specialCharacters)){
        spchar.classList.remove("invalid");
        spchar.classList.add("valid");
    }else{
        spchar.classList.remove("valid");
        spchar.classList.add("invalid");
    }
}



/****For Username field ******/
username.onfocus = function(){  
    document.getElementById('validation-box').style.display= "block";   
}


username.onblur = function(){
    document.getElementById('validation-box').style.display="none";   
}


username.onkeyup = function(){
    //For Length of Username
    if(username.value.length<=20 && username.value.length>0){
        user.classList.remove("invalid");
        user.classList.add("valid");
    }else{
        user.classList.remove("valid");
        user.classList.add("invalid");
    }

}


/******For Email field ******/
email.onfocus = function(){  
    document.getElementById('validation-box').style.display= "block";   
}


email.onblur = function(){
    document.getElementById('validation-box').style.display="none";   
}

email.onkeyup = function(){

    var  mailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    if(email.value.match(mailcheck)){
        checkmail.classList.remove("invalid");
        checkmail.classList.add("valid");
    }else{
        checkmail.classList.remove("valid");
        checkmail.classList.add("invalid");
    }
} 


/*****For Date of Birth  field *****/
dob.onfocus = function(){  
    document.getElementById('validation-box').style.display= "block";   
}


dob.onblur = function(){
    document.getElementById('validation-box').style.display="none";   
}

dob.onkeyup = function(){

    var dob = document.getElementById('dob').value;
    // console.log(dob);

    var parts = dob.split("/");
    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);

    var currDate = new Date();
    

    if(currDate.getFullYear() - dtDOB.getFullYear() >18){
       
        checkdob.classList.remove("invalid");
        checkdob.classList.add("valid");
    }

    else if(currDate.getFullYear() - dtDOB.getFullYear() ==18){

        if(currDate.getMonth() < dtDOB.getMonth()){
            checkdob.classList.remove("valid");
            checkdob.classList.add("invalid");
        }

        if(currDate.getMonth() > dtDOB.getMonth()){
            checkdob.classList.remove("invalid");
            checkdob.classList.add("valid");
        }
        
        if(currDate.getMonth() == dtDOB.getMonth()){
    
            if(currDate.getDate() < dtDOB.getDate()){
                checkdob.classList.remove("valid");
                checkdob.classList.add("invalid");
            }
            else{
                checkdob.classList.remove("invalid");
                checkdob.classList.add("valid"); 
            }
        }
    }
    else{
        checkdob.classList.remove("valid");
        checkdob.classList.add("invalid");
    }

}


/*On Form Submit Display */

document.getElementById("submitbtn").addEventListener("click", function() {
    
    
    var items = document.getElementsByName("cbs");
    var selectedItems = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
    }

    alert(`==>Welcome your Username is : ${username.value} \n==>Your Password is : ${pass.value} \n==>Your E-mail-Id is : ${email.value} \n==>Your Date of Birth is : ${dob.value} \n==>Your City is : ${city.value}  \nYour Selected following Langauges : ${selectedItems}`);
   
    
    
});

