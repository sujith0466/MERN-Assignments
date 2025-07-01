// Form validation logic for assignment-3
// Stores error messages
var errormess = "";

// Function to validate email format
function isEmail(email){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

$(document).ready(function() {
    // Restrict phone input to digits only
    $("#phone").on("input", function() {
        this.value = this.value.replace(/[^\d]/g, '');
    });

    // On submit button click, validate form fields
    $("#submit").click(function(event) {
        errormess = ""; 
        missingfield="";
        
        // Check for required fields
        if ($("#email").val() === "") {
            missingfield += "<p>Email is required.</p>";
        }
        if ($("#phone").val() === "") {
            missingfield += "<p>Phone Number is required.</p>";
        }
        if ($("#password").val() === "") {
            missingfield += "<p>Password is required.</p>";
        }
        
        // Validate email format
        if(isEmail($("#email").val()) == false){
            errormess += "Please enter a valid email address.\n";
        }
        
        // Validate phone number length
        if($("#phone").val().length < 10){
            errormess += "Phone number must be at least 10 digits.\n";
        }
        
        // Validate password match
        if($("#password").val() !== $("#confirmpassword").val()){
            errormess += "Passwords do not match.\n";
        }
        
        // Show success or error messages
        if (errormess == "") {
            $("#success").html("<p>Form submitted successfully!</p>");
        }    
        else {
            $("#error").html("<p>" + errormess + missingfield+ "</p>");
        }
    });
});
