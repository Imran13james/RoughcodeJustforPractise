const createfile = require('fs')
const dirkapath = require('path')
const dirkapa = dirkapath.join(__dirname,'filesystem')

for(i=0;i<5;i++){
    createfile.writeFileSync(dirkapa+`/index${i}.html`,"!!")

}

// const cretefile =require('fs')
// const akak47 = require('path')
// const dirrs = akak47.join(__dirname,'create-files')
// for(n=0;n<4;n++){
//     cretefile.writeFileSync(dirrs+`/Index.css${n}`,'this is index.html',{flag:'a'})
// }