var express = require('express');
var { userModel } = require('../models');

var router = express.Router();


  
router.post('/register', function(req, res, next) {
 
  var userDetails = new userModel({
      
    name: req.body.Name,
    email: req.body.Email,
    subject: req.body.Subject,
    message: req.body.Message,
    phoneNumber: req.body.PhoneNumber,
    address: req.body.Address,
    rooms: req.body.Rooms,
    foods: req.body.Foods,
    diveSite: req.body.DiveSite,
      
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
   


module.exports = router;
