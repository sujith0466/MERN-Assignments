// Form validation logic for assignment-3
var errormess = "";
function isEmail(email){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
$(document).ready(function() {
    $("#submit").click(function(event) {
        errormess = ""; 
        missingfield="";
        if ($("#email").val() === "") {
            missingfield += "<p>Email is required.</p>";
        }
        if ($("#phone").val() === "") {
            missingfield += "<p>Phone Number is required.</p>";
        }
        if ($("#password").val() === "") {
            missingfield += "<p>Password is required.</p>";
        }
        if(isEmail($("#email").val()) == false){
            errormess += "Please enter a valid email address.\n";
        }
        if($("#phone").val().length < 10){
            errormess += "Phone number must be at least 10 digits.\n";
        }
        if($("#password").val() !== $("#confirmpassword").val()){
            errormess += "Passwords do not match.\n";
        }
        if (errormess == "") {
            $("#success").html("<p>Form submitted successfully!</p>");
        }    
        else {
            $("#error").html("<p>" + errormess + missingfield+ "</p>");
        }
    });
});
