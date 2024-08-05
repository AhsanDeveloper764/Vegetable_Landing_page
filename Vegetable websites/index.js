function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    
    // Reset error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    
    // Validate Name
    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email address";
        return false;
    }
// Form is valid
    return true;
}
