console.log("hey promise");

let p = new Promise((resolve, reject) => {
    console.log("promise is pending");

    setTimeout(() => {
        let success=true;
        if(success){
            resolve("promisses is completed")
        }
        if(!success){
            reject("promisses is rejected with error")
        }
    }, 3000);
});

console.log(p);

p.then((value) => {
    console.log(value); 
}).catch((error) => {
    console.log(error); 
});
