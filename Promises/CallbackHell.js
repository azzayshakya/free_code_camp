console.log("you are learning callback hell")

// callback

// function add(a ,  b){
//     console.log(a+b);
// }
// function calc(a,b,funct){
//     funct(a,b);    
// }

// calc(5,4,add)\

console.log("at callback hell situation")

// you want that , firstly server should find the data one then data 2 and then data three.
// show to do show , u can use callback 

// sol-1
// function getdata(dataId){
//     setTimeout(()=>{
//         console.log("data :",dataId)
//     },2000)
// }
// getdata(5)
// getdata(3)
// getdata(6)
// prob- u will gett all the data at the same time

// sol-2("using callbacks")
function getdata(data,getnextdata){
    setTimeout(()=>{
        console.log("data :", data);
        if(getnextdata){
            getnextdata();
        }
    },2000)
    
}
// getdata(1,()=>{
//     getdata(2)
// })
console.log("printing data three ")
getdata(3,()=>{
    console.log("printing data four ")
    getdata(4,()=>{
    console.log("printing data five ")
        getdata(5,()=>{
    console.log("printing data six ")
            getdata(6)
        })    
    })
})
// prob- u will gett all the data at the same time

