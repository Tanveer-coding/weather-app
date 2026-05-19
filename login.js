const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.innerText = "";
    passwordError.innerText = "";

    let valid = true;

    if(email === ""){
        emailError.innerText = "Email is required";
        valid = false;
    }

    if(password === ""){
        passwordError.innerText = "Password is required";
        valid = false;
    }
    else if(password.length < 6){
        passwordError.innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if(valid){

        alert("Login Successful ✅");

        window.location.href = "index1.html";
    }

});
