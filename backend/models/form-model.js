const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    formData:[{
        formTitle: String,
        formDescription: String,
        formQuestions:[
            {
                question: String,
                optionType: String,
                optionsLabel: Array,
                numberOfOptions: Number,
                ans: Array,
            }
        ] 
    }]
})

const Form = new mongoose.model("Form", formSchema)

module.exports = Form;