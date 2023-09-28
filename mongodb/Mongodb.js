const { MongoClient } = require("mongodb"); //this line is used to get the data from from mongodb
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
//this line is to fetch the both mongodb and url  
async function getData() {
    // this is the line where the result show here we are connecting with our database
    let result = await client.connect();
    let db = result.db('store');
    return db.collection('Products');
    //     let response = await Collection.find({name:'imran_al'}).toArray()
    //  console.log(response)
}
module.exports=getData;

