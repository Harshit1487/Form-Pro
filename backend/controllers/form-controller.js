const Form = require("../models/form-model")

// post method for form
const form = async (req, res) => {
    try {
        const {username, email, formData} = req.body;
        const formExist = await Form.findOne({email:email});

        if(formExist){
            const updataForm = await Form.updateOne({email:email}, {$set:{formData: formData}})
            res.status(200).json({msg: updataForm})
        }
        else{
           const formCreated = await Form.create({username, email, formData})
        res.status(200).json({msg: formCreated}) 
        }
        
    } catch (error) {
        res.status(500).json({err: error })
    }
}

const formData = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const {email} = req.body;
        const formExist = await Form.findOne({email:email})
        if(formExist)
            res.status(200).json({msg: formExist})

    } catch (error) {
        console.log(`error from Form route ${error}`)
    }
}

module.exports = {form, formData}