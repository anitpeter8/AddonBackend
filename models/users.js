const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true

    },

})

module.exports = mongoose.model("registration",registrationSchema);