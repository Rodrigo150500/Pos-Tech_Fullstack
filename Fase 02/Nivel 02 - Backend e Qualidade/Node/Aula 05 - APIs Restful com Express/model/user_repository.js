const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    age:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema)