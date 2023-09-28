const {MongoClient} = require("mongodb"); // this is used for to import the data from mongodb
const url = 'mongodb://localhost:27017'; // this is the my data base url 
const client =new MongoClient(url);// this file is used to fetch the url and mongodb

async function GetThedata(){
let result = await client.connect();// this is used that tells the browser we are getting the data 
let db = result.db('Demo') // this is used for which data base is needed
return db.collection('Demo-Collection'); // here this is the return funtion 1st telss which data base locaton
//2nd .collection is used for data base name ()

}

// GetThedat();
module.exports=GetThedata;