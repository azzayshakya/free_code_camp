console.log("you are learing the Pomise Chain")

// function getdata(data)
// let p = new Promise((resolve,reject)=>{
//     console.log("success")
//     resolve(32 )
// })
// console.log(p)

function getdata(data,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data :",data)
            resolve("success")
            if(getnextdata){
                getnextdata();
            }
        }, 2000);
    })
}

getdata(1).then(()=>{
    return getdata(2);
}).then(()=>{
    return getdata(3)
}).then(()=>{
    console.log("success")
})


// you can create multiple promisses but code will be more 

// let value =getdata(5,()=>{
//     getdata(6)
// })
// value.catch((error)=>{
//     console.log(error)
// })
// value.then((data)=>{
//     console.log("promise complete :", data)
// })



// sol-3


// let promise =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("hello sir")
//         resolve("success")

//     }, 2000);
// })
// promise.catch((error)=>{
//     console.log(error)

// })
// promise.then((data)=>{
//     console.log("promise complete :", data)
// })