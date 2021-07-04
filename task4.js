console.log(uppercase(trimSpaces(releaseString('Hello world!'))));

function combine(...args) {
    const combiner_odj = {
        updateString: function (string) {
            args.forEach(method => string = method(string))
            return string;
        }
    }
    return combiner_odj.updateString;
}

const updateString = combine(releaseString, trimSpaces, uppercase);
console.log(updateString('Hello world!'));

function releaseString(str) {
    return str + 3
}

function trimSpaces(str) {
    return str + 2
}

function uppercase(str) {
    return str + 1
}
