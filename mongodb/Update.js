const getData = require('./Mongodb');
const UpdateData  = async ()=>{
    let database =await getData();
    let result = await database.updateMany({
        name:'imran_al'
    },
    {
        $set: {name:"Imran_ALi"}
    })
   console.warn(result)
   
}
UpdateData();