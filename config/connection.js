const {MongoClient} = require('mongodb')
// const mongoClient =new  mongo.MongoClient();
const state = {
    db:null
}

module.exports.connect = async()=>{

    const url = 'mongodb://localhost:27017';
    const dbname = 'shopping'
 
    const client = new MongoClient(url);

    await client.connect()
    console.log("connected successfully");

    state.db = client.db(dbname)

    return 'done'
  
}

module.exports.get = ()=>{
    return state.db
}