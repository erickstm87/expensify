const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');  
        // resolve('this is my other resolved data which is pointless because it\'s already resolved'); 
        reject('something went wrong');     
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');