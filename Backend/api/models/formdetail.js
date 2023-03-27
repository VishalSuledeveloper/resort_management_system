const mongoose = require('mongoose');
var formSchema =new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  address: String,
  room: String,
  food: String,
  diveSite: String,

  // const mongoose = require('mongoose');

  // var userSchema =new mongoose.Schema({
  //   name: String,
  //   email: String,
  //   subject: String,
  //   message: String,
  
  // });
  
  // var userModel = mongoose.model('Users', userSchema);
  // module.exports = userModel;
});

var formModel = mongoose.model('Form', formSchema);
module.exports = formModel;
