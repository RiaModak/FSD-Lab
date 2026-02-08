function validateForm() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let mobile = document.getElementById("mobile");

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    let valid = true;

    if (name.value.trim() === "") {
        document.getElementById("nameError").innerHTML = "❌ Name is required";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.getElementById("emailError").innerHTML = "❌ Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").innerHTML = "❌ Invalid email format";
        valid = false;
    }

    if (password.value.trim() === "") {
        document.getElementById("passwordError").innerHTML = "❌ Password is required";
        valid = false;
    } else if (password.value.length < 6) {
        document.getElementById("passwordError").innerHTML = "❌ Minimum 6 characters required";
        valid = false;
    }

    if (mobile.value.trim() === "") {
        document.getElementById("mobileError").innerHTML = "❌ Mobile number is required";
        valid = false;
    } else if (mobile.value.length !== 10 || isNaN(mobile.value)) {
        document.getElementById("mobileError").innerHTML = "❌ Enter a valid 10-digit mobile number";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").innerHTML =
            "✅ Form submitted successfully!";

        name.value = "";
        email.value = "";
        password.value = "";
        mobile.value = "";
    }

    return false; 
}
