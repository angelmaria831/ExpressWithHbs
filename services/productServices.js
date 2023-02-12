const db  = require('../config/connection')


module.exports ={

    addProduct:(product,callback)=>{
        // console.log({product});
        db.get().collection('products').insertOne(product).then((result)=>{
            console.log(result.insertedId);
            callback(result.insertedId)
        })

    },

    getAllProducts:()=>{

        return new Promise((resolve,reject)=>{
            db.get().collection('products').find({}).toArray().then((products)=>{

                resolve(products)
            })
        })
        
    }
}