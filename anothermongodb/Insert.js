const GetThedata = require('./Main');

const ReadData = async() =>{
    let db =await GetThedata();
    let DatabaseWork  = await db.insertMany([{
        New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
    },
{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D'   
},
{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D' , require:"connection"
},{ 
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
},

{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D'   
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D' , require:"connection"
},{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D'   
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D' , require:"connection"
},{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D'   
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D' , require:"connection"
},{
    New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB"
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D'   
},
{
New_dat:"For New_dat",Dta:"from Node_js",to:"MongoDB" , for:'Insertataing D' , require:"connection"
}
])
    console.log(DatabaseWork)
}
ReadData();


