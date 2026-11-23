function validEmail(email) {
    let pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(email);
}

function validPhone(phone) {
    let pattern = /^01[3-9][0-9]{8}$/;
    return pattern.test(phone);
}

function validName(name) {
    let pattern = /^[A-Za-z ]+$/;
    return pattern.test(name.trim());
}

function hasNumber(password) {
    let pattern = /[0-9]/;
    return pattern.test(password);
}


function checkLoginEmail() {
    let email = document.getElementById("email").value.trim();
    if (email == "") {
        document.getElementById("login-email-error").innerHTML = "Email is required.";
        return false;
    } else if (validEmail(email) == false) {
        document.getElementById("login-email-error").innerHTML = "Enter a valid email address.";
        return false;
    } else {
        document.getElementById("login-email-error").innerHTML = "";
        return true;
    }
}

function checkLoginPassword() {
    let password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("login-password-error").innerHTML = "Password is required.";
        return false;
    } else if (password.length < 8) {
        document.getElementById("login-password-error").innerHTML = "Password must contain at least 8 characters.";
        return false;
    } else if (hasNumber(password) == false) {
        document.getElementById("login-password-error").innerHTML = "Password must contain at least one number.";
        return false;
    } else {
        document.getElementById("login-password-error").innerHTML = "";
        return true;
    }
}

function checkAccountType() {
    let accountType = document.getElementById("account-type").value;
    if (accountType == "") {
        document.getElementById("login-type-error").innerHTML = "Please select an account type.";
        return false;
    } else {
        document.getElementById("login-type-error").innerHTML = "";
        return true;
    }
}

function loginValidation() {
    let emailOK = checkLoginEmail();
    let passwordOK = checkLoginPassword();
    let typeOK = checkAccountType();

    if (emailOK == true && passwordOK == true && typeOK == true) {
        document.getElementById("login-message").innerHTML = "All fields are valid.";
    } else {
        document.getElementById("login-message").innerHTML = "Please correct the errors shown above.";
    }
    return false;
}

function checkOwnerName() {
    let name = document.getElementById("owner-name").value.trim();
    if (name == "") {
        document.getElementById("owner-name-error").innerHTML = "Owner name is required.";
        return false;
    } else if (name.length < 3 || validName(name) == false) {
        document.getElementById("owner-name-error").innerHTML = "Use letters and spaces only (at least 3 characters).";
        return false;
    } else {
        document.getElementById("owner-name-error").innerHTML = "";
        return true;
    }
}

function checkOwnerEmail() {
    let email = document.getElementById("owner-email").value.trim();
    if (email == "") {
        document.getElementById("owner-email-error").innerHTML = "Owner email is required.";
        return false;
    } else if (validEmail(email) == false) {
        document.getElementById("owner-email-error").innerHTML = "Enter a valid email address.";
        return false;
    } else {
        document.getElementById("owner-email-error").innerHTML = "";
        return true;
    }
}

function checkOwnerPhone() {
    let phone = document.getElementById("owner-phone").value.trim();
    if (phone == "") {
        document.getElementById("owner-phone-error").innerHTML = "Phone number is required.";
        return false;
    } else if (validPhone(phone) == false) {
        document.getElementById("owner-phone-error").innerHTML = "Enter an BD 11 digit mobile number. ";
        return false;
    } else {
        document.getElementById("owner-phone-error").innerHTML = "";
        return true;
    }
}

function checkBusinessPassword() {
    let password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("business-password-error").innerHTML = "Password is required.";
        return false;
    } else if (password.length < 8) {
        document.getElementById("business-password-error").innerHTML = "Password must contain at least 8 characters.";
        return false;
    } else if (hasNumber(password) == false) {
        document.getElementById("business-password-error").innerHTML = "Password must contain at least one number.";
        return false;
    } else {
        document.getElementById("business-password-error").innerHTML = "";
        return true;
    }
}

function checkConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword == "") {
        document.getElementById("confirm-password-error").innerHTML = "Please confirm your password.";
        return false;
    } else if (password != confirmPassword) {
        document.getElementById("confirm-password-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("confirm-password-error").innerHTML = "";
        return true;
    }
}

function checkBusinessName() {
    let name = document.getElementById("business-name").value.trim();
    if (name == "" || name.length < 3) {
        document.getElementById("business-name-error").innerHTML = "Business name must contain at least 3 characters.";
        return false;
    } else {
        document.getElementById("business-name-error").innerHTML = "";
        return true;
    }
}

function checkBusinessType() {
    let type = document.getElementById("business-type").value;
    if (type == "") {
        document.getElementById("business-type-error").innerHTML = "Please select a business type.";
        return false;
    } else {
        document.getElementById("business-type-error").innerHTML = "";
        return true;
    }
}

function checkBusinessAddress() {
    let address = document.getElementById("address").value.trim();
    if (address.length < 8) {
        document.getElementById("address-error").innerHTML = "Address must contain at least 8 characters.";
        return false;
    } else {
        document.getElementById("address-error").innerHTML = "";
        return true;
    }
}

function checkDistrict() {
    let district = document.getElementById("district").value.trim();
    if (district == "" || validName(district) == false) {
        document.getElementById("district-error").innerHTML = "Enter a district using letters and spaces only.";
        return false;
    } else {
        document.getElementById("district-error").innerHTML = "";
        return true;
    }
}

function checkContactNumber() {
    let phone = document.getElementById("contact-number").value.trim();
    if (phone == "") {
        document.getElementById("contact-number-error").innerHTML = "Business contact number is required.";
        return false;
    } else if (validPhone(phone) == false) {
        document.getElementById("contact-number-error").innerHTML = "Enter an 11-digit mobile number starting with 013 to 019.";
        return false;
    } else {
        document.getElementById("contact-number-error").innerHTML = "";
        return true;
    }
}

function checkBusinessEmail() {
    let email = document.getElementById("business-email").value.trim();
    if (email != "" && validEmail(email) == false) {
        document.getElementById("business-email-error").innerHTML = "Enter a valid business email address.";
        return false;
    } else {
        document.getElementById("business-email-error").innerHTML = "";
        return true;
    }
}

function checkDescription() {
    let description = document.getElementById("description").value.trim();
    if (description.length < 20) {
        document.getElementById("description-error").innerHTML = "Description must contain at least 20 characters.";
        return false;
    } else {
        document.getElementById("description-error").innerHTML = "";
        return true;
    }
}

function businessValidation() {
    let a = checkOwnerName();
    let b = checkOwnerEmail();
    let c = checkOwnerPhone();
    let d = checkBusinessPassword();
    let e = checkConfirmPassword();
    let f = checkBusinessName();
    let g = checkBusinessType();
    let h = checkBusinessAddress();
    let i = checkDistrict();
    let j = checkContactNumber();
    let k = checkBusinessEmail();
    let l = checkDescription();

    if (a == true && b == true && c == true && d == true && e == true && f == true && g == true && h == true && i == true && j == true && k == true && l == true) {
        document.getElementById("business-message").innerHTML = "Business registration information is valid. Backend submission is still required.";
    } else {
        document.getElementById("business-message").innerHTML = "Please correct the errors shown above.";
    }
    // No backend is connected, so do not send or reload the form.
    return false;
}
