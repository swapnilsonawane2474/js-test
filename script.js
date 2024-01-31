function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValidText = document.getElementById("emailValidText");
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        emailValidText.innerText = "Email is valid";
        emailValidText.style.color = "green";
        return true;
    } else {
        emailValidText.innerText = "Email is not valid";
        emailValidText.style.color = "red";
        return false;
    }
}
const emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", validateEmail);


function validateUrl() {
    const urlInput = document.getElementById("url");
    const urlValidText = document.getElementById("urlValidText");
    const url = urlInput.value.trim();
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(url)) {
        urlValidText.innerText = "URL is valid";
        urlValidText.style.color = "green";
        return true;
    } else {
        urlValidText.innerText = "URL is not valid";
        urlValidText.style.color = "red";
        return false;
    }
}
const urlInput = document.getElementById("url");
urlInput.addEventListener("keyup", validateUrl);


function validateAlpha() {
    const alphaInput = document.getElementById("alpha");
    const alphaValidText = document.getElementById("alphaValidText");
    const alpha = alphaInput.value.trim();
    const alphaRegex = /^[A-Za-z ]+$/;
    if (alphaRegex.test(alpha)) {
        alphaValidText.innerText = "Alpha text is valid";
        alphaValidText.style.color = "green";
        return true;
    } else {
        alphaValidText.innerText = "Alpha text is not valid";
        alphaValidText.style.color = "red";
        return false;
    }
}
const alphaInput = document.getElementById("alpha");
alphaInput.addEventListener("keyup", validateAlpha);


function validateTextarea() {
    const textareaInput = document.getElementById("textarea");
    const textareaValidText = document.getElementById("textareaValidText");
    const textarea = textareaInput.value.trim();
    if (textarea.length > 0) {
        textareaValidText.innerText = "Textarea is valid";
        textareaValidText.style.color = "green";
        return true;
    } else {
        textareaValidText.innerText = "Textarea is required";
        textareaValidText.style.color = "red";
        return false;
    }
}
const textareaInput = document.getElementById("textarea");
textareaInput.addEventListener("keyup", validateTextarea);


function validateImage() {
    const imageInput = document.getElementById("image");
    const imageValidText = document.getElementById("imageValidText");
    if (imageInput.files.length > 0) {
        imageValidText.innerText = "Image is selected";
        imageValidText.style.color = "green";
        return true;
    } else {
        imageValidText.innerText = "Please select an image";
        imageValidText.style.color = "red";
        return false;
    }
}
const imageInput = document.getElementById("image");
imageInput.addEventListener("change", validateImage);


function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordValidText = document.getElementById("passwordValidText");
    const password = passwordInput.value.trim();
    const minLength = 8; 
    if (password.length >= minLength) {
        passwordValidText.innerText = "Password is valid";
        passwordValidText.style.color = "green";
        return true;
    } else {
        passwordValidText.innerText = "Password should be at least ${minLength} characters long";
        passwordValidText.style.color = "red";
        return false;
    }
}
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("keyup", validatePassword);


function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumberValidText = document.getElementById("phoneNumberValidText");
    const phoneNumber = phoneNumberInput.value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
        phoneNumberValidText.innerText = "Phone number is valid";
        phoneNumberValidText.style.color = "green";
        return true;
    } else {
        phoneNumberValidText.innerText = "Please enter a valid 10-digit phone number";
        phoneNumberValidText.style.color = "red";
        return false;
    }
}
const phoneNumberInput = document.getElementById("phoneNumber");
phoneNumberInput.addEventListener("keyup", validatePhoneNumber);


function validateBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValidText = document.getElementById("birthdateValidText");
    const birthdate = new Date(birthdateInput.value); 
    if (!isNaN(birthdate.getTime()) && birthdate < new Date()) {
        birthdateValidText.innerText = "Birthdate is valid";
        birthdateValidText.style.color = "green";
        return true;
    } else {
        birthdateValidText.innerText = "Please enter a valid birthdate";
        birthdateValidText.style.color = "red";
        return false;
    }
}
const birthdateInput = document.getElementById("birthdate");
birthdateInput.addEventListener("change", validateBirthdate);


function validateCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkboxValidText = document.getElementById("checkboxValidText");

    if (checkboxes.length > 0) {
        checkboxValidText.innerText = "At least one checkbox is checked";
        checkboxValidText.style.color = "green";
        return true;
    } else {
       
        checkboxValidText.innerText = "Please check at least one checkbox";
        checkboxValidText.style.color = "red";
        return false;
    }
}

const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
checkboxInputs.forEach(input => {
    input.addEventListener("change", validateCheckbox);
});

function validateCurrency() {
    const currencyInput = document.getElementById("currency");
    const currencyValidText = document.getElementById("currencyValidText");
    const currency = currencyInput.value.trim();

    
    const currencyRegex = /^\d+(\.\d{1,2})?$/;

    if (currencyRegex.test(currency)) {
       
        currencyValidText.innerText = "Currency format is valid";
        currencyValidText.style.color = "green";
        return true;
    } else {
      
        currencyValidText.innerText = "Please enter a valid currency amount";
        currencyValidText.style.color = "red";
        return false;
    }
}


const currencyInput = document.getElementById("currency");
currencyInput.addEventListener("keyup", validateCurrency);