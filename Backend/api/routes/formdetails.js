var express = require('express');
var { userModel } = require('../models');

var router1 = express.Router();
router1.post('/forms', function(req, res, next) {
 
  var formsDetails = new userModel({
      
    name: req.body.Name,
    email: req.body.Email,
    phoneNumber: req.body.PhoneNumber,
    address: req.body.Address,
    rooms: req.body.Rooms,
    foods: req.body.Foods,
    diveSite: req.body.DiveSite

   
      
    });
   
    formsDetails.save().then(doc=>{
      res.status(201).json({
        message:"Inserted Successfully",
        results:doc
      });
  })
  .catch(err=>{
      res.json(err);
  });
   
    
  });
   


module.exports = router1;




// const { formModel } = require('../models')
// const { Router } = require('express')

// const router = Router()

// router.get('/', (req, res) => {
//   formModel.find({}, (error, forms) => {
//     if (error) {
//       res.json({error})
//     } else {
//       res.json(forms)
//     }
//   })
// })

// router.post('/', (req, res) => {
//   const { name, email, phone, address, room, food, site } = req.body
//   formModel.create({ name, email, phone, address, room, food, site })
//     .then(form => {
//       res.json({
//         status: 'success',
//         data: form,
//         msg: ''
//       })
//     })
//     .catch(error => res.json({
//       msg: error,
//       status: 'error',
//       data: null
//     }))
// })

// module.exports = router
