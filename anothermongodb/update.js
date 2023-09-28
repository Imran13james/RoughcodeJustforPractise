const GetThedata = require('./Main');

const UpdateData = async() =>{
    let bgd =await GetThedata();
    let UpdateData = await bgd.updateMany({
     name:"James_Harriot"
    },
    {
        $set : { name:"Imran_ali"}
    }
    )
    console.log(UpdateData)
}
UpdateData();