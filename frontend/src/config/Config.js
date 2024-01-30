import { emailValidation, lengthValidation, specialCharValidation, numbersValidation, upperCaseValidation, lowerCaseValidation, emptyInputValidation, confirmPasswordValidation, phoneValidation, phonedigitValidation, emptyQuestionValidation } from "../utils/Validation";

const email = {
    id:"email",
    label:"email",
    type:"email",
    name:"Email",
    getFieldValidations:()=>[emailValidation],
}

const password = {
    id:"password",
    label:"password",
    type:"password",
    name:"Password",
    getFieldValidations:()=>[lengthValidation, specialCharValidation, numbersValidation, upperCaseValidation, lowerCaseValidation, emptyInputValidation],
}

const confirmPassword = {
    id:"confirmPassword",
    label:"confirmPassword",
    type:"password",
    name:"Confirm Password",
    getFieldValidations:()=>[confirmPasswordValidation]
}

const phone = {
    id:"phone",
    label:"phone",
    type:"phone",
    name:"Phone Number",
    getFieldValidations:()=>[phoneValidation, phonedigitValidation]
}

const country = {
    id:"country",
    label:"country",
    type:"country",
    name:"Country",
    getFieldValidations:()=>[emptyInputValidation]
}

const questions = ["Company Name", "Job Title", "Bussiness Type", "Job Function"]

const question = {
    id:"question",
    label:"question",
    type:"text",
    name: questions,
    getFieldValidations:()=>[emptyQuestionValidation]
}

export const getConfig = (type) => {

    switch(type){
        case 'login': 
            return [ email, password]
            
        case 'register':
            return [email, password, confirmPassword, phone, country]
            
        case 'stepOne':
            return[question]
            
        default:
            break;
    }
}