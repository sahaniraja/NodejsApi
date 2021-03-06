const mongoose = require('mongoose');

const schema = mongoose.Schema;
const subcategorySchema = new schema({
    category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
    },
    subcatname:{
        type:String,
        required:true
    },
    subcatdesc:{
        type:String,
        required:true
    },
    isrecclsd:{
        type:String,
    },
    created_by: {
        type: String, 
        required:true,
    },
    created_at: {
        type: Date, 
        default: Date.now
    },
    updated_by: {
        type: String, 
        required:true,
    },
    updated_at: {
        type: Date, 
        default: Date.now
    },
})

// user.pre('save', function(next){
//     now = new Date();
//     this.updated_at = now;
//     if(!this.created_at) {
//         this.created_at = now
//     }
//     next();
// });

module.exports = mongoose.model('subcategory',subcategorySchema )
