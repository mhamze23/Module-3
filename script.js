// Assignment Code
// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordType = {
    length: "",
    lowercaseChar: "",
    uppercaseChar: "",
    numericChar: "",
    specialChar: ""
};

var characterTypes = function () {
    // Prompt to choose to include lowercase characters 
    passwordType.lowercaseChar = window.prompt("Do you want to include lowercase characters? (Answer: Yes or No.)");
    passwordType.lowercaseChar = passwordType.lowercaseChar.toLowerCase();
    if (passwordType.lowercaseChar === "yes") {
        window.alert("You have chosen to include lowercase characters.");
        passwordType.lowercaseChar = true;
    } else if (passwordType.lowercaseChar === "no") {
        window.alert("You have chosen not to include lowercase characters.");
        passwordType.lowercaseChar = false;
    }
    // Prompt to choose to include numeric characters //
    passwordType.numericChar = window.prompt("Do you want to include numeric characters? (Answer: Yes or No.)");
    passwordType.numericChar = passwordType.numericChar.toLowerCase();
    if (passwordType.numericChar === "yes") {
        window.alert("You have chosen to include numeric characters.");
        passwordType.numeric = true;
    } else if (passwordType.numericChar === "no") {
        window.alert("You have chosen to not include numeric characters.");
        passwordType.numericChar = false;
    }
    // Prompt to choose to include uppercase characters 
    passwordType.uppercaseChar = window.prompt("Do you want to include uppercase characters? (Answer: Yes or No.)");
    passwordType.uppercaseChar = passwordType.uppercaseChar.toLowerCase();
    if (passwordType.uppercaseChar === "yes") {
        window.alert("You have chosen to include uppercase characters.");
        passwordType.uppercaseChar = true;
    } else if (passwordType.uppercaseChar === "no") {
        window.alert("You have chosen to not include uppercase characters.");
        passwordType.uppercaseChar = false;
    }
    // Prompt to choose to include special characters
    passwordType.specialChar = window.prompt("Do you want to include special characters? (Answer: Yes or No.)");
    passwordType.specialChar = passwordType.specialChar.toLowerCase();
    if (passwordType.specialChar === "yes") {
        window.alert("You have chosen to include special characters.");
        passwordType.specialChar = true;
    } else if (passwordType.specialChar === "no") {
        window.alert("You have chosen to not include special characters.");
        passwordType.specialChar = false;
    }
    if (passwordType.lowercaseChar === false &&
        passwordType.uppercaseChar === false &&
        passwordType.numericChar === false &&
        passwordType.specialChar === false) {
        window.alert("You need to pick at least one character type.");
        characterTypes();
    }
};

// Generates password through prompts
var generatePassword = function () {
    // Prompt to set length of the password
    passwordType.length = window.prompt("Choose the length of the password (at least 8 characters and no more than 128).");
    passwordType.length = parseInt(passwordType.length);

    // Asks user to enter valid length
    if (passwordType.length < 8 || passwordType.length > 128) {
        window.alert("You did not enter a valid length. Please try again.");
        generatePassword();
    } else {
        window.alert("You have entered a length of " + passwordType.length + ".");
    }

    window.alert("What character types do you want to use? Choose at least one.");

    characterTypes();

    window.alert("Generating password.");

    var characters = "";
    if (passwordType.lowercaseChar === true) {
        characters = "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordType.uppercaseChar === true) {
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordType.numericChar === true) {
        characters = characters + "0123456789";
    }
    if (passwordType.specialChar === true) {
        characters = characters + "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }

    // Display results in the box
    var result = '';
    var length = passwordType.length
    for (var i = 0, n = characters.length; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * n))
    }
    window.alert('Your new password is ' + result)
    console.log(result)
    return result

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
