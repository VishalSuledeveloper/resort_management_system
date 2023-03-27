var express = require('express');
var { Contact } = require('../models/Contact');
// const { Contact } = require('../models')

var r = express.Router();

  
r.post('/login', function(req, res, next) {
 
  var userDetails = new userModel({
      
    id: req.body.Id,
    password: req.body.Password,
    
      
    });
   
    userDetails.save().then(doc=>{
      res.status(201).json({
        message:"Inserted Successfully",
        results:doc
      });
  })
  .catch(err=>{
      res.json(err);
  });
   
    
  });
   


module.exports = r;



// const { Router } = require('express');
// const { Contact } = require('../models')

// const r = Router()

// r.get('/', (req, res) => {
//   Contact.find({})
//     .then(contacts => res.json(contacts))
//     .catch(error => res.json({error}))
// })

// r.post('/', (req, res) => {
//   Contact.create(req.body)
//     .then(contact => res.json({contact, status: 'success', error: ''}))
//     .catch(error => res.json({error, status: 'error'}))
// })

// module.exports = r
