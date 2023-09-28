const getData = require('./Mongodb');
const insertdata = async()=>{
    let db = await getData();
    const result = await db.insertOne({
        name:"data from node js", location:"Mongodb"
    })
    console.log(result);
}
insertdata();
