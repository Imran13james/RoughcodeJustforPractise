const mongoose = require('mongoose');
const Productschemas =new mongoose.Schema({
    name: String,
    number: Number,
    Email: String
});
// const main = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Demo')
//     const Productschemas = new mongoose.Schema({
//         name: String,
//         number: Number,
//         Email: String
//     })
//     const ProductModel = mongoose.model('demo-collections', Productschemas);
//     let data =new ProductModel({
//         name: "imran_shahadat",
//         number: '03056151224'
//     });
//     const result = await data.save()
//     console.log(result)
// }

const Update =async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Demo')
    const ProductModel = mongoose.model('demo-collections', Productschemas);
    let data = await ProductModel.updateMany(
        {name:"Imran_ali"},
        {
            $set:{name:"james"}
        }
    );
    console.log('this operation has been done')
}



const deletone = async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Demo')
    const ProductModel = mongoose.model('demo-collections', Productschemas);
    let data = await ProductModel.deleteMany({
        Name:"Imran_ali"
    })
    console.log(data)
}

const Findindb = async () => {

    await mongoose.connect('mongodb://127.0.0.1:27017/Demo')
    const ProductModel = mongoose.model('Demo-Collection', Productschemas);
    let data = await ProductModel.find({});
    console.log(data)
}


// ------------------------------------------------------------------------


const Delected = async () => {

    await mongoose.connect('mongodb://127.0.0.1:27017/Demo')
    const ProductModel = mongoose.model('Demo-Collection', Productschemas);
    let data = await ProductModel.deleteMany({
        name: "this is the post man data"
    })
    console.log(data)
}

Delected();



