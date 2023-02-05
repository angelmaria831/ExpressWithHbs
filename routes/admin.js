var express = require('express');
var router = express.Router();
var productService = require('../services/productServices')

// console.log(__dirname);
/* GET users listing. */
router.get('/', function(req, res, next) {
  const products = [

    {
      "title":"Easy Mop",
      "category":"cleaning",
      "description":"Easy mop for easier cleaning",
      "imgUrl":"https://m.media-amazon.com/images/I/31kH8afu+EL._SY450_.jpg"
    },
    {
      "title":"Shea Butter",
      "category":"cosmetics",
      "description":"For smooth skin",
      "imgUrl":"https://tse3.mm.bing.net/th?id=OIP.A-enhedRHu5Fs3od_vBT9gHaKP&pid=Api&P=0"
    },
    {
      "title":"Vegetable Cutter",
      "category":"kitchen",
      "description":"For time saving and easier curring",
      "imgUrl":"https://images-na.ssl-images-amazon.com/images/I/71LftQRdhUL._AC_SL1500_.jpg"
    },
    {
      "title":"Easy Mop 1",
      "category":"cleaning",
      "description":"Easy mop for easier cleaning",
      "imgUrl":"https://m.media-amazon.com/images/I/31kH8afu+EL._SY450_.jpg"
    }
  ]
  
  
  res.render('admin/view-products', { products,admin:true});
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
