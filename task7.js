function delay(ms) {
    return new Promise((resolve, reject) => {
        console.log("Promise work");
        setTimeout(resolve, ms);
    });
}

delay(3000)
    .then(() => console.log('Hello World!'))
