const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  id: String,
  password: String,
  // subject: String,
  // message: String
})

const Contact = model('Contact', contactSchema);

module.exports = Contact
