const GetThedata = require('./Main')

const ReadData = async() =>{
    let database =await GetThedata();
    let Reading =await database.find({}).toArray();

console.log(Reading);
}
ReadData();

// let  Read = await data.find({name:'Google Pixel 7a'}).toArray();