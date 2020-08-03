function queryToObject(query) {
    return query.slice(1).split("&").reduce((acc, cur) => {
        const [key, value] = cur.split('=');
        return {
            [key]: stringToType(value),
            ...acc,
        }
    }, {});
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
