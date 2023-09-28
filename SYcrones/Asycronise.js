console.log("this is the first line")
setTimeout(()=>{
    console.log("this is the with wating this is the 2nd line")
},2000 )

console.log("this is the 3rd line")

// now we want to know how to resovle the problem in node js


const a=10
const b=20

// let watingData = new Promise((ersolve, rejected)=>{
//     setTimeout(()=>{
//         ersolve(900)
//     },2000)    

// })

// watingData.then((data)=>{
//     console.log(a+data)
// })


let waitingdate =new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("james_harriot")
    },1000)
    console.warn(resolve)
})
waitingdate.then((data)=>{
console.log(a+data)
})
