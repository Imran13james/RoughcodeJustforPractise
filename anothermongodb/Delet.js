const GetThedata = require('./Main');

const ForDeleting = async()=>{
    let base = await GetThedata();
    let Dele_Line = await base.deleteMany({
    Replace:"For Replace"
    })

    console.log(Dele_Line)
}
ForDeleting();