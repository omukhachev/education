function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        const isNumber = typeof a === "number" && typeof b === "number";
        if (isNumber) {
                resolve(a + b);
        } else {
            reject(new Error("not a number"));
        }
    })
}

window.asyncSum = asyncSum;

export default asyncSum;
