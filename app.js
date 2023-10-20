function validateForm() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error_message");

    if (emailInput.value === "") {
        errorMessage.textContent = "Valid Email Required";
        errorMessage.style.display = "block";
        emailInput.style.border = "1px solid #f1763d";
    } else {
        errorMessage.style.display = "none";
        emailInput.style.border = "1px solid black";

        const emailPlaceholder = document.getElementById("email_placeholder");
        emailPlaceholder.textContent = emailInput.value;
        document.getElementById("success_message").style.display = "flex";
    }
}

function dismissSuccessMessage() {
    document.getElementById("success_message").style.display = "none";
}
