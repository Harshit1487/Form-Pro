export const emailValidation = (value) => {
    const reg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value === ''){
        return 'Please enter your email'
    }else if(!reg.test(value)){
        return 'Please enter email in valid format.'
    }
} 

export const emptyInputValidation = (value) => {
    if(value === ''){
        return 'Please enter your details'
    }
}

export const lowerCaseValidation = (value) => {
    const num = /[a-z]/g;
    if(!num.test(value)){
        return 'Please enter at least one lower case character.'
    }
}

export const upperCaseValidation = (value) => {
    const num = /[A-Z]/g;
    if(!num.test(value)){
        return 'Please enter at least one upper case character.'
    }
}

export const numbersValidation = (value) => {
    const num = /[0-9]/g;
    if(!num.test(value)){
        return 'Please enter at least one number.'
    }
}

export const specialCharValidation = (value) => {
    const speChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!speChars.test(value)){
        return 'Please enter at least one special character.'
    }
}

export const lengthValidation = (value) => {
    const len = value.length
    if(len < 8){
        return 'Password length must be greater than 8'
    }
}

export const confirmPasswordValidation = (confirmPasswordValue, passwordValue) => {
    // console.log(confirmPasswordValue, passwordValue, passwordValue !== confirmPasswordValue)
    if(passwordValue !== confirmPasswordValue){
        return 'Password and Confirm Password must be same'
    }
}

export const phoneValidation = (value) => {
    if(value.length !== 10){
        return 'Phone number must be 10 digits only'
    }
}

export const phonedigitValidation = (value) => {
    const phone = /[^0-9]/g;

    if(phone.test(value)){
        return 'Please enter number only.'
    }
}

export const emptyQuestionValidation = (value) => {
    if(value === ''){
        return 'Please enter your answer'
    }
}

