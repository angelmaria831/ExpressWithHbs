var express = require('express');
var router = express.Router();
var productService = require('../services/productServices')

// console.log(__dirname);
/* GET users listing. */
router.get('/', function(req, res, next) {
    
  productService.getAllProducts().then((products)=>{
    console.log(products);

    res.render('admin/view-products', { products,admin:true});
  })
  
  
});

router.get('/add-product',(req,res,next)=>{

  res.render('admin/add-products')
})

router.post('/add-product',(req,res,next)=>{

  console.log("Inside post",req.body)
  console.log("file ",req.files)
  let img = req.files.Image
 

  productService.addProduct(req.body,(id)=>{
    console.log(id);

    img.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(err)console.error(err);
      else{
        console.log("Product Added");
        res.render("admin/view-products")
      }
    })

  })
})


module.exports = router;
