const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        Lowercase: true,
        minlength: [13, "email must be at leat 5 chr"]

    },
    password: {
        type: String,
      
        trim: true,
        required: true,
        minlength: [5, "email must be at leat 5 chr"]
    },
    username: {
        type:String,
        trim: true,
        required: true,
        minlength: [5, "email must be at leat 5 chr"]
    }

})

const User = mongoose.model('User',userSchema)
module.exports= User ;
