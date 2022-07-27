
function verify() {
    let pwd = document.querySelector("#password").value;
    let retyped_pwd = document.querySelector("#retype_password").value;
    let result = document.querySelector("#verification_status");

    let is_valid = true;
    let lowercase_count = 0;
    let uppercase_count = 0;
    let special_symbol_count = 0;
    let digit_count = 0;
    let whitespace_count = 0;
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

    for (let i = 0; i < pwd.length; i++) {
        let letter = pwd.charAt(i);

        if (letter <= 'z' && letter >= 'a') {
            lowercase_count++;
        }

        if (letter <= 'Z' && letter >= 'A') {
            uppercase_count++;
        }

        if (letter >= '0' && letter <= '9') {
            digit_count++;
        }

        for (let j = 0; j < symbols.length; j++) {
            if (letter == symbols[j]) {
                special_symbol_count++;
                break;
            }
        }

        if (letter == ' ') {
            whitespace_count++;
        }
    }

    if (pwd != retyped_pwd) {
        result.innerText = "Error! Wrong retyped password";
        is_valid = false;
    }
    else if (pwd.length < 8 || pwd.length > 20) {
        result.innerText = "Error! The number of letters must be between 8 and 20";
        is_valid = false;
    }
    else if (lowercase_count < 1) {
        result.innerText = "Error! The password must contain at least 1 lowercase letter";
        is_valid = false;
    }
    else if (uppercase_count < 1) {
        result.innerText = "Error! The password must contain at least 1 uppercase letter";
        is_valid = false;
    }
    else if (digit_count < 1) {
        result.innerText = "Error! The password must contain at least 1 digit";
        is_valid = false;
    }
    else if (special_symbol_count < 1) {
        result.innerText = "Error! The password must contain at least 1 special symbol";
        is_valid = false;
    }
    else if (whitespace_count != 0) {
        result.innerText = "Error! The password must not contain whitespace";
        is_valid = false;
    }

    if (is_valid == false) {
        document.getElementById("verification_status").className = "status-error";
    } else {
        document.getElementById("verification_status").className = "status-success";
        result.innerText = "Successfully registered";
    }  
}