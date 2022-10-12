function passwordValidator(password) {
    let validLength = true;
    let validContent = true;
    let validDigits = true;
    let passLength = password.length;
    let digitsCount = 0;
 
    function passwordLength(pass){
        if(passLength >= 6 && passLength <= 10){
            validLength;
        } else {
            validLength = false;
        }
        return validLength;
    }
 
    let firstCheck = passwordLength(password);
 
    if(!validLength){
        console.log(`Password must be between 6 and 10 characters`);
    }
 
    function passwordContent(pass){
 
        for(let i = 0; i < passLength; i++){
            let current = pass.charCodeAt(i);
 
            if(current >= 48 && current <= 57){
                validContent;
                digitsCount++;
            } else if(current >= 65 && current <= 90){
                validContent;
            } else if(current >= 97 && current <= 122){
                validContent;
            } else {
                validContent = false;
            }
        }
        return validContent;
    }
 
    let secondCheck = passwordContent(password);
 
    if(!validContent){
        console.log(`Password must consist only of letters and digits`);
    }
 
    function validNumOfDigits(pass){
        if(digitsCount >= 2){
            validDigits;
        } else {
            validDigits = false;
        }
        return validDigits;
    }
 
    let thirdCheck = validNumOfDigits(password);
 
    if(!validDigits){
        console.log(`Password must have at least 2 digits`);
    }
 
    if(validLength && validContent && validDigits){
        console.log(`Password is valid`);
    }
}

passwordValidator(`MyPass12345`)