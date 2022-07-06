const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    firntname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('user',userSchema )
