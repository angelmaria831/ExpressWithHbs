var express = require('express');
var router = express.Router();

/* GET home page. */
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
  
  
  res.render('index', { products,admin:true});
});

module.exports = router;
