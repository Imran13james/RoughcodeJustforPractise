const { __express } = require('ejs');
const fs=require('fs')
const path = require('path');
// const filespath =`${dirpath}/index0.html`
const dirpath = path.join(__dirname);
// this is used to get the current directery name we can also use the __dirname this 2nd parameter the name of the file 

// console.log(dirpath)



// i have apply the for each loop in this parameter  to create the more files
// for(i=0;i<3;i++)
// {
//     fs.writeFileSync(dirpath+`/inded${i}.html`,"this is the second parameter")
// }




// now if i want to read the fiel names only then we use this parameter
// fs.readdir(dirpath,(err,file)=>{
//     file.forEach((item)=>{
//         console.log(item)
//     })
// })

//how to read the file inside data using file system



// fs.readFile('filessystem/index1.html','utf-8',(err,item)=>{
//     console.log(item)
// })

// // this is used for to update the file name 
// fs.appendFile('filessystem/index1.html',"hello yaar tw kia haal hai",(err,item)=>{
// console.log('file has been updated')
// })


//to delete the file 
// fs.unlinkSync('filessystem/inded1.txt')


//now what is the buffer this is used to take temp memory 