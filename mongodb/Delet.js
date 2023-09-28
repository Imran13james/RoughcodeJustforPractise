const getData = require('./Mongodb')


const Deletdata = async()=>{
    let database =await getData()
    const result = await database.deleteMany({
        name:'imran -ali'
    })
   if(result.acknowledged){
    console.log('data has been deletd')
   }
   else{
    console.log('nothing has been found')
   }
}
Deletdata()
