const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, minlength:5, maxlength: 35},
    email: {type: String, minlength:5, maxlength: 35},
    country: {type: String, minlength:1, maxlength: 3},
    updatedAt: {type: Date},
    createdAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('userModel',userSchema);