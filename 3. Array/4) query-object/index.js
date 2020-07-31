function queryToObject(query) {
    let arr = query.slice(1).split("&");
    let obj = {};
    let subArr;

    for (let i = 0; i < arr.length; i++) {
        subArr = arr[i].split("=");
        obj[subArr[0]] = stringToType(subArr[1]);


    }

    return obj;

}
function stringToType(str) {
    switch (str) {
        case "null":
            return null;
        case "undefined":
            return undefined;
        case "true":
            return true;
        case "false":
            return false;
        case "":
            return "";
        default: {
            if (!isNaN(Number(str))) {
                return Number(str);
            }
            return str;
        }
    }


}
window.queryToObject = queryToObject;

export default queryToObject;
