
const mongoose = require('mongoose');

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  phoneNumber: String,
  address: String,
  rooms: String,
  diveSite: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports = userModel;