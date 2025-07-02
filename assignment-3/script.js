// Form validation logic for assignment-3
// Stores error messages
var errormess = "";

// Function to validate email format
function isEmail(email){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
// Function to validate password strength
function isStrongPassword(pwd) {
    // 8-15 chars, at least 1 uppercase, 1 lowercase, 1 special char
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
    return regex.test(pwd);
}

$(document).ready(function() {
    // Restrict phone input to digits only and max 10 digits
    $("#phone").on("input", function() {
        this.value = this.value.replace(/[^\d]/g, '').slice(0, 10);
    });

    // Toggle password visibility for password field
    $("#togglePassword").on("click", function() {
        var pwd = $("#password");
        var type = pwd.attr("type") === "password" ? "text" : "password";
        pwd.attr("type", type);
        $(this).attr("src", type === "password" ? "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye.svg" : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye-slash.svg");
    });
    // Toggle password visibility for confirm password field
    $("#toggleConfirmPassword").on("click", function() {
        var pwd = $("#confirmpassword");
        var type = pwd.attr("type") === "password" ? "text" : "password";
        pwd.attr("type", type);
        $(this).attr("src", type === "password" ? "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye.svg" : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye-slash.svg");
    });

    // On submit button click, validate form fields
    $("#submit").click(function(event) {
        errormess = ""; 
        missingfield="";
        $("#success").html("");
        $("#error").html("");
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
            errormess += "<p>Please enter a valid email address.</p>";
        }
        // Validate phone number length
        if($("#phone").val().length < 10){
            errormess += "<p>Phone number must be at least 10 digits.</p>";
        }
        // Validate password match
        if($("#password").val() !== $("#confirmpassword").val()){
            errormess += "<p>Passwords do not match.</p>";
        }
        // Validate password strength
        var pwdVal = $("#password").val();
        if(pwdVal && !isStrongPassword(pwdVal)){
            errormess += "<p>Password must be 8-15 characters, include at least one uppercase letter, one lowercase letter, and one special character.</p>";
        }
        // Show success or error messages
        if (errormess === "" && missingfield === "") {
            $("#success").html("<p>Form submitted successfully!</p>");
            $("#error").html("");
        } else {
            $("#success").html("");
            $("#error").html(errormess + missingfield);
            event.preventDefault();
        }
    });
});
