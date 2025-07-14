function simplePromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

simplePromise().then((message) => {
    console.log(message);
});
