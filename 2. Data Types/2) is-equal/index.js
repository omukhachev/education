function isEqual(a, b) {
    if (a === null || b === null) {
        return false;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (let key in a) {

        if ((typeof a[key] === "object" || typeof b[key] === "object") && a[key] !== null && b[key] !== null) {
            if (!isEqual(a[key], b[key])) {
                console.log("1");
                return false;
            }
        } else {
            if (a[key] !== b[key]) {
                return false;
            }
            console.log("yea boi");
            console.log(key + " " + b[key]);
            if (typeof a[key] === "undefined" && typeof b[key] === "undefined" && !b.hasOwnProperty(key)) {
                return false;
            }
        }
    }
    return true;
}

window.isEqual = isEqual;

export default isEqual;
