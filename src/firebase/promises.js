const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Cathal',
        //     age: 24
        // });
        reject('ERROR HERE');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
}).catch((error) => {
    console.log('error is:', error);
});

console.log('after');