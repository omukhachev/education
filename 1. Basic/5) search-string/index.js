function searchString(obj) {
    if (!Object.keys(obj).length) {
        return "";
    }

    let string = "?";

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
            string += key + "=" + obj[key] + "&";
        }
    }
    return string.slice(0, -1);
}

window.searchString = searchString;

export default searchString;
