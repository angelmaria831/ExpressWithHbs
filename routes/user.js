var express = require('express');
var router = express.Router();
const productServices = require('../services/productServices')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  productServices.getAllProducts().then((products)=>{
    res.render('user/view-products', { products,admin:false});
  })
  
  
});

module.exports = router;
