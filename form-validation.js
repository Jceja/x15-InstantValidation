function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;


  if (userEntered.length < 6){
   document.getElementById("usernameError").classList.remove("hidden-message");
   document.getElementById("usernameError").classList.add("shown-message");
      document.getElementById("usernameError").innerHTML="Username must at least 6 characters.";
    document.getElementById("usernameGroup").classList.add("has-error");
}else if (userEntered.includes(" ")){
document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
document.getElementById("usernameError").innerHTML="Username has no spaces";
document.getElementById("usernameGroup").classList.add("has-error");
  }else if (userEntered.length >= 6) {
document.getElementById("usernameGroup").classList.add("has-success");

  }


  //Show message that there is an error with the username...


  //Turn the username items red

   if (passEntered.includes("password") ){
     document.getElementById("passwordError").classList.remove("hidden-message");
     document.getElementById("passwordError").classList.add("shown-message");
       document.getElementById("passwordError").innerHTML="Bad Password";
       document.getElementById("passwordGroup").classList.add("has-error");

   }
   else if (passEntered.includes(userEntered)){
     document.getElementById("passwordError").classList.remove("hidden-message");
     document.getElementById("passwordError").classList.add("shown-message");
       document.getElementById("passwordError").innerHTML="Password Cannout be Username";
       document.getElementById("passwordGroup").classList.add("has-error");
   }
   else if (passEntered.length < 6 || passEntered.length >20){
     document.getElementById("passwordError").classList.remove("hidden-message");
     document.getElementById("passwordError").classList.add("shown-message");
       document.getElementById("passwordError").innerHTML="Password must between 6 and 20 characters";
       document.getElementById("passwordGroup").classList.add("has-error");
  }
   else if (passEntered != "password") {
     document.getElementById("passwordGroup").classList.add("has-success");
   }
  //Show message that there is an error with the password...


  //Turn the password items red

}
