function isEqual(a, b) {
    if (a === null || b === null) {
        return false;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (let key in a) {
        const outerCond = (typeof a[key] === "object" || typeof b[key] === "object") && a[key] !== null && b[key] !== null;
        if (outerCond) {
            if (!isEqual(a[key], b[key])) {
                return false;
            }
        } else {
            const innerCond = typeof a[key] === "undefined" && typeof b[key] === "undefined" && !b.hasOwnProperty(key) || a[key] !== b[key];
            if (innerCond) {
                return false;
            }
        }
    }
    return true;
}

window.isEqual = isEqual;

export default isEqual;
