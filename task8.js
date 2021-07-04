const firstPromise = () => {
    return Promise.resolve('Data payload from the first promise...')
}

const secondPromise = () => {
    return Promise.resolve('Promise has rejected...')
}

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const promiseCount = promises.length;
        const resolvedData = []
        let resolvedCount = 0;

        function checkStatus(data) {
            resolvedData.push(data);
            resolvedCount++;
            if (resolvedCount === promiseCount) {
                resolve(resolvedData)
            }
        }

        promises.forEach((promise, i) => {
            promise().then((data) => {
                checkStatus(data)
            }).catch((error) => {
                reject(error)
            })
        })
    })
}

promiseAll([firstPromise, secondPromise])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
