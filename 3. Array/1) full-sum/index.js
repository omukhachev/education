function fullSum(...args) {


    if (args.some(function (args) {
        return typeof args !== "number";

    })) {
        throw "Wrong Argument Type";
    }
    try {
        return args.reduce(function (a, b) {
            return a + b;
        })
    } catch {
        return 0;
    }


}

window.fullSum = fullSum;

export default fullSum;
