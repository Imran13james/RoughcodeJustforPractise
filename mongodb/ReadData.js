const getData = require('./Mongodb')
// getData();

// console.log(getData())


//we can handle promise in two ways using sync await also promise function(try catch function


const main = async () => {
    let data = await getData();
   let  Read = await data.find({name:'Google Pixel 7a'}).toArray();
    console.log("=>>>>>>>",Read)
//     if(data){
//         console.log('done')
//     }
 }
main();