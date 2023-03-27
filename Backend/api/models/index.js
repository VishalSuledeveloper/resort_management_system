const mongoose = require('mongoose');
const userModel = require('./User.js')
const formModel = require('./formdetail.js')
const Contact = require('./Contact.js')

mongoose.connect('mongodb+srv://vishal_User:vishalsule.224@cluster0.5m83b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
module.exports= {
    userModel,
    formModel,
    Contact
}